'use client'

import { useEffect, useState } from "react";
import { listDogs } from "@/app/actions"

export default function ClientComponent () {
	const [dogs, setDogs] = useState([]);
	
	useEffect(() => {
		listDogs().then(dogs => setDogs(dogs));
	}, []);

	return (
		<p>I'm a Client Component. There are <strong>{dogs.length}</strong> dogs in the Dog table.</p>
	)
}