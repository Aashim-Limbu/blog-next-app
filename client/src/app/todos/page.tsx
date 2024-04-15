import { getTodos } from "@/api/Todo.api";
import TodoSkeleton from "@/components/TodoSkeleton";
import { Todo } from "@/types/todo";
import React, { Suspense } from "react";

export default function page() {
	return (
		<div className="px-4 py-2 bg-slate-200 flex flex-col flex-1">
			<Suspense fallback={<TodoSkeleton />}>
					<TodoLists />
			</Suspense>
		</div>
	);
}
async function TodoLists() {
	const todos = await getTodos<Todo[]>();
	return (
		<ul className="pl-4 list-disc text-slate-700 text-lg">
			{todos.map((todo) => (
				<li
					className={`${todo.completed && "line-through"}`}
					key={todo.id}
				>
					{todo.title}
				</li>
			))}
		</ul>
	);
}
