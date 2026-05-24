'use client'
import { useState } from 'react'
import type { DayProgress, Language } from '@/types'
import { tr } from '@/data/translations'

export default function NotesTab({ dayId, progress, updateNotes, lang }: {
  dayId: number; progress: DayProgress
  updateNotes: (field: keyof DayProgress['notes'], value: string) => void; lang: Language
}) {
  const [tab, setTab] = useState<'free' | 'structured'>('free')
  const notes = progress.notes

  const exportNotes = () => {
    const txt = `GIAIC Study Tracker — Day ${dayId} Notes\n${'='.repeat(40)}\n\nFREE WRITE:\n${notes.freeWrite}\n\nKEY CONCEPT:\n${notes.keyConcept}\n\nIMPORTANT POINTS:\n${notes.importantPoints}\n\nMY QUESTIONS:\n${notes.myQuestions}\n`
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain' }))
    a.download = `Day-${dayId}-Notes.txt`
    a.click()
  }

  return (
    <div className={`space-y-3 ${lang === 'ur' ? 'urdu-text' : ''}`}>

      {/* Sub-tabs */}
      <div className="flex gap-1 bg-emerald-100 rounded-xl p-1 w-fit">
        {(['free', 'structured'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              tab === t ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-200'
            }`}
          >
            {t === 'free' ? tr('freeWrite', lang) : tr('structured', lang)}
          </button>
        ))}
      </div>

      {tab === 'free' && (
        <textarea value={notes.freeWrite} onChange={e => updateNotes('freeWrite', e.target.value)}
          placeholder={tr('freeWritePlaceholder', lang)} rows={12}
          className="w-full bg-white border border-emerald-200 rounded-xl p-4 text-gray-700 text-sm resize-none placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
        />
      )}

      {tab === 'structured' && (
        <div className="space-y-3">
          {[
            { label: tr('keyConcept', lang),     field: 'keyConcept' as const,      ph: tr('keyConceptPlaceholder', lang), rows: 3 },
            { label: tr('importantPoints', lang), field: 'importantPoints' as const, ph: tr('pointsPlaceholder', lang),    rows: 5 },
            { label: tr('myQuestions', lang),     field: 'myQuestions' as const,     ph: tr('questionsPlaceholder', lang), rows: 3 },
          ].map(({ label, field, ph, rows }) => (
            <div key={field} className="bg-white rounded-xl border border-emerald-100 p-3 shadow-sm">
              <p className="text-emerald-700 text-xs font-bold mb-2 uppercase tracking-wide">📌 {label}</p>
              <textarea value={notes[field]} onChange={e => updateNotes(field, e.target.value)}
                placeholder={ph} rows={rows}
                className="w-full bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 text-gray-700 text-sm resize-none placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>
          ))}
        </div>
      )}

      <button onClick={exportNotes}
        className="w-full py-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all shadow-sm"
      >
        {tr('exportNotes', lang)}
      </button>
    </div>
  )
}
