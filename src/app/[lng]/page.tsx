import Link from "next/link"
import { useTranslation } from "@/i18n"

type Props = {
  params: {
    lng: string
  }
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)

  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="flex flex-col">
        <h1>{t("title")}</h1>
        <Link href="/second-page">{t("to-second-page")}</Link>
        <Link href="/client-page">{t("to-client-page")}</Link>
      </div>
    </main>
  )
}
