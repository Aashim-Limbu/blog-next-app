import { revalidatePath } from "next/cache";

export default function Page() {
	revalidatePath("/todos");
	return <>Revalidate the Todo Route</>;
}
