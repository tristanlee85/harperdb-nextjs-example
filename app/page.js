import Link from "next/link";
import ClientComponent from "./client-component";

export default async function Page() {
  return (
    <section>
      <ClientComponent/>
      <p>Check out the <Link href="/dogs">Dogs</Link> page to get started.</p>
    </section>
  )
}