// //getting all the resources
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   //posting a resource
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const url = 'https://jsonplaceholder.typicode.com/posts';
const post = {
              method: 'POST',
              body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }

async function pushProduct (){
    try {
        let result = await fetch(url,post)
        let products = await result.json()
        console.log(`Has Posted object with user Id 1`);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}
pushProduct();
//   //updating a resource
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const put = {
              method: 'PUT',
              body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }

async function putProduct (){
    try {
        let result = await fetch(url1,put)
        let products = await result.json()
        console.log(`Has Put post 1`);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

putProduct();

//   //patching a resource
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


const patch = {
              method: 'PATCH',
              body: JSON.stringify({
                title: 'foo',
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }

async function patchProduct (){
    try {
        let result = await fetch(url1,patch)
        let products = await result.json()
        console.log(`Has patched post 1`);
        console.log(products);
    } catch (error) {
        console.log(error);
    }
}

patchProduct();
//   //deleting a resource
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

const url2 = 'https://jsonplaceholder.typicode.com/posts/1';
const deleteprod = {
  method: 'DELETE',
}

async function deleteProduct (){
try {
let result = await fetch(url2,deleteprod)
let products = await result.json()
console.log(`Has deleted post 1 `);
console.log(products);
} catch (error) {
console.log(error);
}
}

deleteProduct();