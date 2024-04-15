import wait from "./wait";

export async function getComments<T>(id: string): Promise<T> {
	await wait(4000);
	return fetch(`http://127.0.0.1:3001/posts/${id}/comments`).then((res) =>
		res.json()
	);
}
