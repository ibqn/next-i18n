import Link from "next/link"
import { useTranslation } from "@/i18n"
import { fallbackLng, languages } from "@/i18n/settings"

type Props = {
  params: Promise<{
    lng: string
  }>
}

export default async function Page({ params }: Props) {
  let { lng } = await params

  if (languages.indexOf(lng) < 0) lng = fallbackLng

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
