import wait from "./wait";

export async function getPost<T>(id: string): Promise<T> {
    await wait(2000)
	return fetch(`http://127.0.0.1:3001/posts/${id}`).then((res) => res.json());
}
export async function getPosts<T>(): Promise<T> {
	await wait(4000);
	return fetch("http://127.0.0.1:3001/posts").then((res) => res.json());
}
