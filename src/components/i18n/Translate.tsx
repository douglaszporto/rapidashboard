import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type TranslateProps = {
    path: string
}

const Translate = ({ path }: TranslateProps) => {
  const { t } = useTranslation()
  return <>{t(path)}</>
}

const i18n = (path: string) => {
  return String(i18next.t(path))
}

export {Translate, i18n}