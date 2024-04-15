import wait from "./wait";

export async function getUser<T>(id: string): Promise<T> {
    await wait(2000)
	return fetch(`http://127.0.0.1:3001/users/${id}`).then((res) => res.json());
}
export async function getUsers<T>(): Promise<T> {
    await wait(4000)
	return fetch(`http://127.0.0.1:3001/users`).then((res) => res.json());
}
export async function getUserPost<T>(id: string): Promise<T> {
    await wait(4000)
	return fetch(`http://127.0.0.1:3001/posts?user=${id}`).then((res) =>
		res.json()
	);
}
