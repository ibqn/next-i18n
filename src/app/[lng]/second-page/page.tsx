import { useTranslation } from "@/app/i18n"
import Link from "next/link"

type Props = {
  params: {
    lng: string
  }
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng, "second-page")
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div>
        <h1>{t("title")}</h1>
        <Link href={`/`}>{t("back-to-home")}</Link>
      </div>
    </main>
  )
}
