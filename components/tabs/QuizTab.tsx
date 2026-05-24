'use client'
import { useState } from 'react'
import type { DayProgress, Language, QuizQuestion } from '@/types'
import { tr } from '@/data/translations'

export default function QuizTab({ questions, progress, updateQuiz, lang }: {
  questions: QuizQuestion[]; progress: DayProgress
  updateQuiz: (answers: (number | null)[], score: number | null) => void; lang: Language
}) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-emerald-100 p-8 text-center shadow-sm">
        <p className="text-5xl mb-3">🧠</p>
        <p className="text-emerald-800 text-sm font-semibold">Quiz aaj generate hoga</p>
        <p className="text-gray-400 text-xs mt-1">Bolo "generate Day N" — agent 20 questions banayega ✅</p>
      </div>
    )
  }

  const q       = questions[current]
  const answers = progress.quizAnswers.length ? progress.quizAnswers : new Array(questions.length).fill(null)
  const score   = progress.quizScore

  /* Score screen */
  if (score !== null) {
    const pct   = Math.round((score / questions.length) * 100)
    const grade = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '💪'
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-xl border border-emerald-100 p-6 text-center shadow-sm">
          <p className="text-5xl mb-2">{grade}</p>
          <p className="text-emerald-600 text-4xl font-bold">{score}/{questions.length}</p>
          <p className="text-gray-500 text-sm mt-1">{tr('yourScore', lang)}</p>
          <div className="bg-emerald-100 rounded-full h-3 mt-4">
            <div className={`h-3 rounded-full transition-all duration-700 ${pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-400'}`}
              style={{ width: `${pct}%` }} />
          </div>
          <p className="text-gray-400 text-xs mt-2">{pct}%</p>
        </div>
        <button
          onClick={() => { setCurrent(0); setSelected(null); updateQuiz(new Array(questions.length).fill(null), null) }}
          className="w-full py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm"
        >
          {tr('retakeQuiz', lang)}
        </button>
      </div>
    )
  }

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[current] = selected
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelected(newAnswers[current + 1] ?? null)
      updateQuiz(newAnswers, null)
    } else {
      updateQuiz(newAnswers, newAnswers.filter((a, i) => a === questions[i].correct).length)
    }
  }

  return (
    <div className={`space-y-4 ${lang === 'ur' ? 'urdu-text' : ''}`}>

      {/* Progress */}
      <div className="bg-white rounded-xl border border-emerald-100 p-3 shadow-sm">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span className="font-semibold text-emerald-800">{current + 1} / {questions.length}</span>
          <span>{answers.filter(a => a !== null).length} {tr('answered', lang)}</span>
        </div>
        <div className="bg-emerald-100 rounded-full h-2">
          <div className="bg-emerald-500 h-2 rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
        <p className="text-emerald-900 text-sm font-medium leading-relaxed">{q.question[lang]}</p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect  = i === q.correct
          const isSelected = selected === i
          let cls = 'bg-white border-emerald-100 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50'
          if (selected !== null) {
            if (isCorrect)       cls = 'bg-emerald-50 border-emerald-400 text-emerald-800'
            else if (isSelected) cls = 'bg-red-50 border-red-300 text-red-700'
            else                 cls = 'bg-white border-gray-100 text-gray-400 opacity-50'
          }
          return (
            <button key={i} onClick={() => selected === null && setSelected(i)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all shadow-sm ${cls}`}
            >
              <span className="font-bold mr-2 text-emerald-600">{['A','B','C','D'][i]}.</span>
              {opt[lang]}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {selected !== null && (
        <div className={`rounded-xl p-3 text-xs border ${selected === q.correct ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-red-50 border-red-200 text-red-700'}`}>
          <p className="font-bold mb-1">{selected === q.correct ? tr('correct', lang) : tr('incorrect', lang)}</p>
          <p>{tr('explanation', lang)} {q.explanation[lang]}</p>
        </div>
      )}

      {/* Nav */}
      <div className="flex gap-2">
        {current > 0 && (
          <button onClick={() => { setCurrent(current - 1); setSelected(answers[current - 1] ?? null) }}
            className="flex-1 py-2.5 rounded-xl bg-white border border-emerald-200 text-gray-500 text-sm hover:text-emerald-700 hover:border-emerald-400 transition-all shadow-sm"
          >
            {tr('previous', lang)}
          </button>
        )}
        <button onClick={handleNext} disabled={selected === null}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm ${
            selected !== null ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {current < questions.length - 1 ? tr('next', lang) : tr('yourScore', lang) + ' →'}
        </button>
      </div>
    </div>
  )
}
