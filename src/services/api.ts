// import axios from "axios";

// const client = axios.create({
//     // baseURL:"http://localhost:3000"
//     baseURL:"https://my-json-server.typicode.com/khalidaazizi/fake-api"
// })
// export async function getProducts() {
//     const {data} = await client("/products")
//     return data
    
// }
// export async function getProduct(id:number | string) {
//     const {data} = await client(`/products/${id}`)
//     return data


// }

import axios from "axios";

const client = axios.create({
  baseURL: "https://raw.githubusercontent.com/khalidaazizi/fake-api/main"
});

export async function getProducts() {
  const { data } = await client.get("/db.json");
  return data.products; // آرایه products را جدا می‌کنیم
}

export async function getProduct(id: number | string) {
  const { data } = await client.get("/db.json");
  return data.products.find((p: any) => p.id === Number(id));
}
