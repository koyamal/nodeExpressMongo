// new Promise((resolve, reject) => {
//   console.log("Hello ");
//   resolve();
// }).then(() => {
//   console.log("World");
//   return "Resolve";
// }
// ).catch(() => {
//   console.log("dlroW");
// });

async function usePromise() {
  const res = await new Promise((resolve, reject) => {
    console.log("Hello ");
    resolve();
  }).then(() => {
    console.log("World");
    return "Resolve";
  }
  ).catch(() => {
    console.log("dlroW");
  });

  console.log(res);
}

usePromise();
