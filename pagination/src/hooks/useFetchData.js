import { useEffect } from "react";
import { useState } from "react";
import { POKE_API } from "../constants/url";

function getIfDataExist(nextUrl, count) {
  let arr = nextUrl.split("offset=");
  let max = 1,
    prevCount = 0;
  while (Number(arr[1].slice(0, max)) === Number(arr[1].slice(0, max))) {
    prevCount = Number(arr[1].slice(0, max++));
  }

  if (prevCount > count) {
    return false;
  }
  return true;
}

export function useFetchData() {
  const [data, setData] = useState([]);
  const [nextUrl, setNExtUrl] = useState("");
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [callNext, setCallNext] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(POKE_API);
        const json = await response.json();
        setData(json?.results);
        setNExtUrl(json?.next || "");
        if (!json.next) {
          setIsDataAvailable(false);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!isDataAvailable || callNext == 0) return;
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(nextUrl);
        const json = await response.json();
        setData((data) => [...data, ...json.results]);
        setNExtUrl(json?.next || "");
        setIsDataAvailable(getIfDataExist(json?.next, json?.count));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
        setError(true);
      }
    }
    fetchData();
  }, [callNext]);

  return { data, isDataAvailable, loading, error, setCallNext };
}
