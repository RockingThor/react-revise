let a = 0;

b();

const anew = () => {
  let a = 1;
  console.log(a);
};

anew();

function b() {
  console.log(a);
  console.log(this);
}
