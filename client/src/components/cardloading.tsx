import Skeleton from "@/components/Skeleton";
import React from "react";

export default function Loading({count}:{count:number}) {
    const skeletons = Array.from({length:count},(_,index)=>(
        <Skeleton key={index}/>
    ))
	return (
		<div className="grid grid-cols-2 gap-4">
            {skeletons}
		</div>
	);
}
