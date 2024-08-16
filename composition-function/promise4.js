class MyPromiseUncaughtError extends Error {
  constructor(err) {
    super(err);
    this.stack = `(in promise) ${err.stack}`;
  }
}
class MyPromise {
  #state = "pending";
  #value;
  #resolveCallbacks = [];
  #rejectCallbacks = [];
  #bindedOnResolve = this.#onResolve.bind(this);
  #bindedOnReject = this.#onReject.bind(this);
  constructor(passedCallback) {
    try {
      passedCallback(this.#bindedOnResolve, this.#bindedOnReject);
    } catch (error) {
      this.#onReject(error);
    }
  }
  #runStoredCallbacks() {
    if (this.#state === "fulfilled") {
      this.#resolveCallbacks.forEach((func) => {
        func(this.#value);
      });
      this.#resolveCallbacks = [];
    }
    if (this.#state === "rejected") {
      this.#rejectCallbacks.forEach((func) => {
        func(this.#value);
      });
      this.#rejectCallbacks = [];
    }
  }
  #onResolve(passedValue) {
    queueMicrotask(() => {
      if (this.#state !== "pending") return;
      if (passedValue instanceof MyPromise) {
        passedValue.then(this.#bindedOnResolve, this.#bindedOnReject);
        return;
      }
      this.#value = passedValue;
      this.#state = "fulfilled";
      this.#runStoredCallbacks();
    });
  }
  #onReject(passedValue) {
    queueMicrotask(() => {
      if (this.#state !== "pending") return;
      if (passedValue instanceof MyPromise) {
        passedValue.then(this.#bindedOnResolve, this.#bindedOnReject);
        return;
      }
      if (this.#rejectCallbacks.length === 0) {
        throw new MyPromiseUncaughtError(passedValue);
      }
      this.#value = passedValue;
      this.#state = "rejected";
      this.#runStoredCallbacks();
    });
  }
  then(resolveCb, rejectCb) {
    return new MyPromise((resolve, reject) => {
      this.#resolveCallbacks.push((result) => {
        if (resolveCb == null) {
          resolve(result);
          return;
        }
        try {
          resolve(resolveCb(result));
        } catch (error) {
          reject(error);
        }
      });
      this.#rejectCallbacks.push((result) => {
        if (rejectCb == null) {
          reject(result);
          return;
        }
        try {
          resolve(rejectCb(result));
        } catch (error) {
          reject(error);
        }
        this.#runStoredCallbacks();
      });
    });
  }
  catch(passedCb) {
    return this.then(undefined, passedCb);
  }
  finally(passedCb) {
    return this.then(
      (result) => {
        passedCb();
        return result;
      },
      (result) => {
        passedCb();
        throw result;
      }
    );
  }
  static resolve(passedValue) {
    return new MyPromise((resolve) => {
      resolve(passedValue);
    });
  }
  static reject(passedValue) {
    return new MyPromise((resolve, reject) => {
      reject(passedValue);
    });
  }
}
