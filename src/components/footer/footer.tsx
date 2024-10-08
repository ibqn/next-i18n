"use client"

import { Trans } from "react-i18next/TransWithoutContext"
import { languages } from "@/i18n/settings"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"
import { useTranslation } from "@/i18n/client"

type Params = {
  lng: string
}

export const Footer = () => {
  const { lng } = useParams<Params>()
  const { t } = useTranslation(lng, "footer")

  const pathname = usePathname()

  const path = useMemo(() => {
    const regex = new RegExp(`^/${lng}/?`)
    return pathname.replace(regex, "/")
  }, [pathname, lng])

  const router = useRouter()

  const changeLanguage = (lng: string) => () => {
    router.push(`/${lng}${path}`)
    router.refresh()
  }

  return (
    <footer className="flex items-center justify-center bg-gray-200 p-8">
      <div>
        <Trans i18nKey="language-switcher" t={t}>
          {/* @ts-expect-error Trans interpolation */}
          Switch from <strong>{{ lng }}</strong> to:{" "}
        </Trans>
        {languages
          .filter((l) => lng !== l)
          .map((language, index) => {
            return (
              <span key={language}>
                {index > 0 && " or "}
                <button onClick={changeLanguage(language)}>{language}</button>
              </span>
            )
          })}
      </div>
    </footer>
  )
}
