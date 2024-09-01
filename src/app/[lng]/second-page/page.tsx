import Link from "next/link"

type Props = {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div>
        <h1>Hi from second page!</h1>
        <Link href={`/${lng}/`}>first page</Link>
      </div>
    </main>
  )
}
