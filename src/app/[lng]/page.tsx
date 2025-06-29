import Link from "next/link"
import { getT } from "@/i18n"

export default async function Page() {
  const { t } = await getT()

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
