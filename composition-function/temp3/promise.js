class MyPromiseUncaughtError extends Error {
  constructor(error) {
    super(error);
    this.stack = `(in promise) ${error.stack}`;
  }
}
class MyPromise {
  #thenCallbacks = [];
  #catchCallbacks = [];
  #value;
  #state = "pending";
  #bindedOnResolve = this.#onResolve.bind(this);
  #bindedOnReject = this.#onReject.bind(this);

  constructor(cb) {
    // console.log(cb.toString());
    try {
      cb(this.#bindedOnResolve, this.#bindedOnReject);
    } catch (error) {
      this.#onReject(error);
    }
  }

  #runStoredCallbacks() {
    if (this.#state === "fulfilled") {
      this.#thenCallbacks.forEach((cb) => {
        cb(this.#value);
      });
      this.#thenCallbacks = [];
    }
    if (this.#state === "rejected") {
      this.#catchCallbacks.forEach((cb) => {
        cb(this.#value);
      });
      this.#catchCallbacks = [];
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

      if (this.#catchCallbacks.length === 0) {
        throw new MyPromiseUncaughtError(passedValue);
      }

      this.#value = passedValue;
      this.#state = "rejected";
      this.#runStoredCallbacks();
    });
  }
  then(thenCallback, catchCallback) {
    return new MyPromise((resolve, reject) => {
      this.#thenCallbacks.push((result) => {
        if (thenCallback == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCallback(result));
        } catch (error) {
          reject(error);
        }
      });
      this.#catchCallbacks.push((result) => {
        if (catchCallback == null) {
          reject(result);
          return;
        }
        try {
          resolve(catchCallback(result));
        } catch (error) {
          reject(error);
        }
        this.#runStoredCallbacks();
      });
    });
  }

  catch(passedCallback) {
    return this.then(undefined, passedCallback);
  }

  finally(passedCallback) {
    return this.then(
      (result) => {
        passedCallback();
        return result;
      },
      (result) => {
        passedCallback();
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

let myProm = new MyPromise((resolve, reject) => {
  resolve("From my promise");
});

myProm.then((val) => console.log(val));
