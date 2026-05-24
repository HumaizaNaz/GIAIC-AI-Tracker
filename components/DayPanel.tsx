'use client'
import { useState } from 'react'
import type { DayContent, DayProgress, Language, QuizQuestion } from '@/types'
import { tr } from '@/data/translations'
import StudyTab from './tabs/StudyTab'
import NotesTab from './tabs/NotesTab'
import QuizTab from './tabs/QuizTab'

type Tab = 'study' | 'notes' | 'quiz'

export default function DayPanel({ day, progress, questions, updateProgress, lang }: {
  day: DayContent; progress: DayProgress; questions: QuizQuestion[]
  updateProgress: (p: Partial<DayProgress>) => void; lang: Language
}) {
  const [tab, setTab] = useState<Tab>('study')
  const isUrdu = lang === 'ur'

  const tabs = [
    { key: 'study' as Tab, icon: '📖', label: tr('study', lang) },
    { key: 'notes' as Tab, icon: '📝', label: tr('notes', lang) },
    { key: 'quiz'  as Tab, icon: '🧠', label: tr('quiz', lang) },
  ]

  return (
    <div className={`flex-1 flex flex-col overflow-hidden bg-emerald-50 ${isUrdu ? 'urdu-text' : ''}`}>

      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-emerald-200 bg-white shadow-sm">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {day.type === 'crash-course' && <span className="text-[10px] bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">⚡ {tr('crashCourseDay', lang)}</span>}
              {day.type === 'exam'         && <span className="text-[10px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">📝 {tr('examDay', lang)}</span>}
              {day.type === 'review'       && <span className="text-[10px] bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">🔄 {tr('reviewDay', lang)}</span>}
              {!['Crash Course','Exam','Review'].includes(day.section) && (
                <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{tr('section', lang)} {day.section}</span>
              )}
            </div>
            <h2 className="text-emerald-900 font-bold text-base leading-snug">
              {day.id === 0 ? day.title[lang] : `Day ${day.id} — ${day.title[lang]}`}
            </h2>
            <p className="text-gray-500 text-xs mt-0.5">
              {tr('estimated', lang)}: {day.estimatedTime}
              {progress.quizScore !== null && (
                <span className="ml-3 text-emerald-600 font-semibold">Quiz: {progress.quizScore}/{questions.length} ✓</span>
              )}
            </p>
          </div>

          {day.type !== 'exam' && (
            <button
              onClick={() => updateProgress({ completed: !progress.completed })}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex-shrink-0 font-semibold ${
                progress.completed
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-emerald-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              {progress.completed ? '✅ Done' : tr('markComplete', lang)}
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 pt-3 pb-2 bg-white border-b border-emerald-100">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              tab === t.key
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-emerald-50 text-gray-500 hover:text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {tab === 'study' && <StudyTab day={day} lang={lang} />}
        {tab === 'notes' && (
          <NotesTab dayId={day.id} progress={progress}
            updateNotes={(field, value) => updateProgress({ notes: { ...progress.notes, [field]: value } })}
            lang={lang} />
        )}
        {tab === 'quiz' && (
          <QuizTab questions={questions} progress={progress}
            updateQuiz={(answers, score) => updateProgress({ quizAnswers: answers, quizScore: score })}
            lang={lang} />
        )}
      </div>
    </div>
  )
}
