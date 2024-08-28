import Link from "next/link";

export default async function Page() {
  return (
    <section>
      <p>Check out the <Link href="/dogs">Dogs</Link> page to get started.</p>
    </section>
  )
}