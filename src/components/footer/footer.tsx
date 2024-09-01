import Link from "next/link"
import { Trans } from "react-i18next/TransWithoutContext"
import { languages } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n"

type Props = {
  lng: string
}

export const Footer = async ({ lng }: Props) => {
  const { t } = await useTranslation(lng, "footer")

  return (
    <footer className="flex items-center justify-center bg-gray-200 p-8">
      <div>
        <Trans i18nKey="language-switcher" t={t}>
          {/* @ts-expect-error Trans interpolation */}
          Switch from <strong>{{ lng }}</strong> to:{" "}
        </Trans>
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " or "}
                <Link href={`/${l}`}>{l}</Link>
              </span>
            )
          })}
      </div>
    </footer>
  )
}
