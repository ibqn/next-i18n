"use client"

import Link from "next/link"
import { Trans } from "react-i18next/TransWithoutContext"
import { languages } from "@/app/i18n/settings"
import { TFunction } from "i18next"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { useTranslation } from "@/app/i18n/client"

type Props = {
  lng: string
}

export const Footer = ({ lng }: Props) => {
  const { t } = useTranslation(lng, "footer")

  const pathname = usePathname()

  const path = useMemo(() => {
    const regex = new RegExp(`^/${lng}/?`)
    return pathname.replace(regex, "/")
  }, [pathname, lng])

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
                <Link href={`/${l}${path}`}>{l}</Link>
              </span>
            )
          })}
      </div>
    </footer>
  )
}
