import Link from "next/link"
import { useTranslation } from "@/app/i18n"
import { Footer } from "@/components/footer"

type Props = {
  params: {
    lng: string
  }
}

export default async function Page({ params: { lng } }: Props) {
  const { t } = await useTranslation(lng)

  return (
    <section className="flex min-h-screen flex-col justify-between">
      <main className="flex flex-1 items-center justify-center">
        <div>
          <h1>{t("title")}</h1>
          <Link href={`/second-page`}>{t("to-second-page")}</Link>
        </div>
      </main>
      <Footer lng={lng} />{" "}
    </section>
  )
}
