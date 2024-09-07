"use client"

import Link from "next/link"
import { useTranslation } from "@/app/i18n/client"
import { useState } from "react"

type Props = {
  params: {
    lng: string
  }
}

export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "client-page")
  const [counter, setCounter] = useState(0)

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div className="m-1 flex gap-4">
        <button
          className="border border-slate-300 px-4 py-1"
          onClick={() => setCounter(Math.max(0, counter - 1))}
        >
          -
        </button>
        <button
          className="border border-slate-300 px-4 py-1"
          onClick={() => setCounter(Math.min(10, counter + 1))}
        >
          +
        </button>
      </div>
      <Link href="/">
        <button type="button">{t("back-to-home")}</button>
      </Link>
    </main>
  )
}
