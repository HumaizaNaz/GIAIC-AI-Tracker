'use client'
import type { DayContent, Language } from '@/types'
import { tr } from '@/data/translations'

export default function StudyTab({ day, lang }: { day: DayContent; lang: Language }) {
  return (
    <div className={`space-y-4 ${lang === 'ur' ? 'urdu-text' : ''}`}>

      {/* Exam Notes — shown for any day type if notes exist */}
      {day.notes?.[lang] && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h3 className="text-emerald-700 text-sm font-bold mb-3">
            {day.type === 'crash-course' ? '🤖' : '📚'} {tr('aiNotes', lang)}
          </h3>
          <div className="text-emerald-900 text-sm leading-relaxed whitespace-pre-wrap font-mono text-xs">{day.notes[lang]}</div>
        </div>
      )}

      {/* Key Topics */}
      <div className="bg-white rounded-xl border border-emerald-100 p-4 shadow-sm">
        <h3 className="text-emerald-700 text-xs font-bold tracking-wider mb-3 uppercase">📌 {tr('keyTopics', lang)}</h3>
        <ul className="space-y-2">
          {day.topics.map((topic, i) => (
            <li key={i} className="flex gap-2 text-gray-700 text-sm">
              <span className="text-emerald-500 mt-0.5 font-bold">•</span>
              <span>{topic[lang]}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Study Links */}
      {day.studyLinks.length > 0 && (
        <div className="bg-white rounded-xl border border-emerald-100 p-4 shadow-sm">
          <h3 className="text-emerald-700 text-xs font-bold tracking-wider mb-3 uppercase">🔗 {tr('studyLinks', lang)}</h3>
          <div className="flex flex-col gap-2">
            {day.studyLinks.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  link.label.includes('Exam') || link.label.includes('📝')
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                <span>{link.label.includes('Exam') ? '📝' : '🔗'}</span>
                <span className="flex-1">{link.label}</span>
                <span className="text-xs opacity-40">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {day.type === 'exam' && (
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">📝</p>
          <p className="text-emerald-700 font-bold">{tr('examDay', lang)}</p>
          <p className="text-gray-500 text-xs mt-1">{tr('estimated', lang)}: {day.estimatedTime}</p>
        </div>
      )}

      {day.type === 'review' && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
          <p className="text-4xl mb-2">🔄</p>
          <p className="text-blue-700 font-bold">{tr('reviewDay', lang)}</p>
        </div>
      )}
    </div>
  )
}
