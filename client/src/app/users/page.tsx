import React, { Suspense } from "react";
import { getUsers } from "../../api/User.api";
import { User } from "@/types/user";
import Button from "@/components/Button";
import Link from "next/link";
import Loading from "@/components/cardloading";


export default async function page() {
	return (
		<>
			<h1 className="text-xl font-semibold py-2">Users:</h1>
			<Suspense fallback={<Loading count={8} />}>
				<UserList />
			</Suspense>
		</>
	);
}
async function UserList() {
	const users = await getUsers<User[]>();
	return (
		<div className="grid grid-cols-2 gap-2 pt-2">
			{users.map((user) => (
				<div className="flex flex-col bg-white p-2" key={user.id}>
					<h1 className="text-xl font-semibold">{user.name}</h1>
					<div className="h-1 w-full bg-slate-300"></div>
					<div className="flex-1 py-2">
						<div>Company: {user.company.name}</div>
						<div>Email: {user.email}</div>
						<div>Website: {user.website}</div>
					</div>
					<div className="self-end">
						<Button type="button">
							<Link href={`users/${user.id}`}>View</Link>
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}
