// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value1");
//     },5000);
// });
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved value2");
//     },10000);
// });

// function getData(){
//     p.then((res)=>console.log(res));
// }
// getData();

// async function getData(){
//     const val1 = await p1;
//     console.log("Namaste javaScript");
//     console.log(val1);

//     const val2 = await p2;
//     console.log("Namaste javaScript");
//     console.log(val2);
// };
// getData();

// const dataPromise = getData();
// dataPromise.then((res)=>{
//     console.log(res);
// });

const API_URL = "https://fakestoreapi.com/products";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}
handlePromise();
