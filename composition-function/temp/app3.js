function switchCaseExample(val) {
  switch (val) {
    case 1: {
      console.log(1);
      break;
    }
    case 2: {
      console.log(2);
      break;
    }
    default: {
      console.log("default");
    }
  }
}

switchCaseExample(1);

const apiFun = async () => {
  setTimeout(() => {
    return "hello";
  }, 2000);
};

apiFun().then((output) => console.log(output));

// console.log(res);
