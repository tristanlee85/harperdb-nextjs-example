import { getDog, listDogs } from "@/app/actions";

export async function generateStaticParams() {
	const dogs = await listDogs();

	return dogs;
}

export default async function Dog({ params }) {

	const dog = await getDog(params.id);

	return (
		<section>
			<h1>{dog.name}</h1>
			<p>Breed: {dog.get('breed')}</p>
			<p>Woof!</p>
		</section>
	)
}