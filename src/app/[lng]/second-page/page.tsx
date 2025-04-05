import { useTranslation } from "@/i18n"
import Link from "next/link"

type Props = {
  params: Promise<{
    lng: string
  }>
}

export default async function Page({ params }: Props) {
  const { lng } = await params

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "second-page")

  return (
    <main className="flex flex-1 items-center justify-center">
      <div>
        <h1>{t("title")}</h1>
        <Link href="/">{t("back-to-home")}</Link>
      </div>
    </main>
  )
}
