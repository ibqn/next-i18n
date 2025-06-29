import { getT } from "@/i18n"
import Link from "next/link"

export default async function Page() {
  const { t } = await getT("second-page")

  return (
    <main className="flex flex-1 items-center justify-center">
      <div>
        <h1>{t("title")}</h1>
        <Link href="/">{t("back-to-home")}</Link>
      </div>
    </main>
  )
}
