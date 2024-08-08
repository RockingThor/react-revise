import { useCallback, useEffect, useState } from "react";

export function useAsync(cb, dependencies = []) {
  const { excecute, ...stateVariables } = useAsyncInternal(
    cb,
    dependencies,
    true
  );

  useEffect(() => {
    excecute();
  }, [excecute]);

  return stateVariables;
}

export function useAsyncFn(cb, dependencies = []) {
  return useAsync(cb, dependencies, false);
}

export function useAsyncInternal(cb, dependencies, initialLoading = false) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const excecute = useCallback((...args) => {
    setLoading(true);
    return cb(...args)
      .then((data) => {
        setValue(data);
        setError(undefined);
        return data;
      })
      .catch((error) => {
        setError(error);
        setValue(undefined);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { loading, error, value, excecute };
}
