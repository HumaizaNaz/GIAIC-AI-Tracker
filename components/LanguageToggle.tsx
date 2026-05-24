'use client'
import type { Language } from '@/types'

const langs: { key: Language; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'ru', label: 'RU' },
  { key: 'ur', label: 'UR' },
]

export default function LanguageToggle({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  return (
    <div className="flex gap-1 bg-emerald-100 rounded-full p-0.5">
      {langs.map((l) => (
        <button key={l.key} onClick={() => setLang(l.key)}
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
            lang === l.key ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-600 hover:text-emerald-800'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
