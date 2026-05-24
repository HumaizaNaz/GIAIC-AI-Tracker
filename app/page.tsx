'use client'
import { useState } from 'react'
import type { AppState, DayProgress, Language } from '@/types'
import { DEFAULT_APP_STATE, DEFAULT_DAY_PROGRESS } from '@/types'
import { schedule } from '@/data/schedule'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import LanguageToggle from '@/components/LanguageToggle'
import Sidebar from '@/components/Sidebar'
import DayPanel from '@/components/DayPanel'
import type { QuizQuestion } from '@/types'

// Quiz questions — generated daily by agent (add per day below)
const questions: Record<number, QuizQuestion[]> = {
  // day 0, 1, 2 ... will be added by daily agent
}

export default function Home() {
  const [state, setState, loaded] = useLocalStorage<AppState>('giaic-tracker', DEFAULT_APP_STATE)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gbg">
        <div className="text-gprimary text-lg animate-pulse">Loading... 🌿</div>
      </div>
    )
  }

  const lang: Language = state.language
  const currentDayId = state.currentDay
  const currentDay = schedule.find((d) => d.id === currentDayId) ?? schedule[0]
  const dayProgress: DayProgress = state.days[currentDayId] ?? DEFAULT_DAY_PROGRESS
  const completedCount = Object.values(state.days).filter((d) => d.completed).length

  const setLang = (l: Language) => setState((s) => ({ ...s, language: l }))

  const setCurrentDay = (id: number) => {
    setState((s) => ({ ...s, currentDay: id }))
    setSidebarOpen(false)
  }

  const updateProgress = (patch: Partial<DayProgress>) => {
    setState((s) => ({
      ...s,
      days: {
        ...s.days,
        [currentDayId]: {
          ...(s.days[currentDayId] ?? DEFAULT_DAY_PROGRESS),
          ...patch,
          notes: {
            ...(s.days[currentDayId]?.notes ?? DEFAULT_DAY_PROGRESS.notes),
            ...(patch.notes ?? {}),
          },
        },
      },
    }))
  }

  return (
    <div className="flex flex-col h-svh overflow-hidden bg-emerald-50">
      {/* ── Navbar ── */}
      <nav className="bg-white border-b border-emerald-200 px-4 py-2.5 flex items-center justify-between flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gprimary text-xl leading-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <span className="text-emerald-700 font-bold text-sm md:text-base">
            GIAIC AI Tracker 🎓
          </span>
        </div>
        <LanguageToggle lang={lang} setLang={setLang} />
      </nav>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/60 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed md:relative top-0 bottom-0 left-0 z-20 transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="h-full pt-14 md:pt-0">
            <Sidebar
              schedule={schedule}
              progress={state.days}
              currentDay={currentDayId}
              setCurrentDay={setCurrentDay}
              lang={lang}
              completedCount={completedCount}
            />
          </div>
        </div>

        {/* Day Panel */}
        <DayPanel
          day={currentDay}
          progress={dayProgress}
          questions={questions[currentDayId] ?? []}
          updateProgress={updateProgress}
          lang={lang}
        />
      </div>
    </div>
  )
}
