import styles from './page.module.css'
const { Dog } = tables;

export default async function Home() {
  let dogs = [];
  // get a list of dogs to render. note that nextjs's rendering doesn't (yet) support async iterators, so
  // we have to accumulate these first
  for await (let dog of Dog.search({})) {
    dogs.push(dog);
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Here are some dogs:
          <ul>
            {dogs.map((dog) => (
               <li>{dog.name}</li>
            ))}
          </ul>
        </p>
      </div>
    </main>
  )
}
