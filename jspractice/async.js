// always return a promise 
async function getData(){
  return "namaste";


}

const data = getData();
console.log(data);

data.then((res) => console.log(res));
