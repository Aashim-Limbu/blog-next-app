import wait from "./wait";

export async function getTodos<T>():Promise<T>{
    await wait(4000)
    return fetch("http://127.0.0.1:3001/todos").then(res=>res.json());
}
export async function getUserTodo<T>(id:string):Promise<T>{
    await wait(2000);
    return fetch(`http://127.0.0.1:3001/todos?userId=${id}`).then(res=>res.json());
}
