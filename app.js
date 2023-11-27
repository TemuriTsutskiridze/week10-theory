// API -> application programming interface
// REST API -> Representational state transfer

// CRUD
// C (Create) -> POST
// R (Read) -> GET
// U (Update) -> PUT
// D (Delete) -> DELETE

// -------------------- GET METHOD

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// json-server data.json

// async function fetchData() {
//   const response = await fetch("http://localhost:3000/people");
//   const data = await response.json();
//   console.log(data);
// }

// fetchData();

// -------------------------------- POST METHOD

// async function postData() {
//   try {
//     const response = await fetch("http://localhost:3000/people", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: "zuka",
//         age: 22,
//       }),
//     });
//     if (response.status > 299 || response.status < 200) {
//       throw new Error("Failed to post data");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// postData();

// const obj = {
//   name: "zuka",
//   age: 22,
// };
// const jsonObj = JSON.stringify(obj);
// console.log(typeof jsonObj);

//  ----------------- PUT METHOD

// async function putData() {
//   const response = await fetch("http://localhost:3000/peple/30", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "temo",
//       age: 22,
//     }),
//   });
//   console.log(response);
// }

// putData();

// ---------------------- DELETE METHOD

async function deleteData() {
  const response = await fetch("http://localhost:3000/people/1", {
    method: "DELETE",
  });
  console.log(response);
}

deleteData();
