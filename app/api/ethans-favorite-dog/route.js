export async function GET(request) {
	const dog = await tables.Dog.get('0');
	return new Response(`Ethan's favorite dog is ${dog.get('name')}\n`)
}