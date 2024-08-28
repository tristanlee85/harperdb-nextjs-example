import Link from "next/link";
import { listDogs } from "@/app/actions";

export default async function Dogs({ children }) {

	const dogs = await listDogs();

	return (
		<>
			<section>
				<h2>Dogs</h2>
				<aside>This page is a Next.js Server Component employing Static Rendering. This is the default Next.js page experience. The list of dogs below was queried and the page was rendered all at <strong>build time</strong>.</aside>
				<p>Furthermore, this page has a subroute comprised of individual pages for each of the dogs. These pages were also generated at build time! Click on any dog in the list to see it's details.</p>
				<ol>
					{dogs.map(dog => (
						<li key={dog.id}><Link href={`/dogs/${dog.id}`}>{dog.name}</Link></li>
					))}
				</ol>
			</section>
			{children}
		</>
	)
}