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
        <h1>Hi there!</h1>
        <Link href={`/${lng}/second-page`}>second page</Link>
      </div>
    </main>
  )
}
