'use client'
import type { DayContent, DayProgress, Language } from '@/types'
import { tr } from '@/data/translations'

function getDayBadge(day: DayContent) {
  if (day.type === 'exam')         return { cls: 'bg-emerald-600 text-white', icon: '📝' }
  if (day.type === 'review')       return { cls: 'bg-blue-500 text-white',    icon: '🔄' }
  if (day.type === 'crash-course') return { cls: 'bg-amber-500 text-white',   icon: '⚡' }
  return null
}

export default function Sidebar({ schedule, progress, currentDay, setCurrentDay, lang, completedCount }: {
  schedule: DayContent[]
  progress: Record<number, DayProgress>
  currentDay: number
  setCurrentDay: (d: number) => void
  lang: Language
  completedCount: number
}) {
  const total = schedule.filter(d => d.type !== 'exam').length
  const pct   = Math.round((completedCount / total) * 100)
  const isUnlocked = (id: number) => id === 0 || id === 1 || progress[id - 1]?.completed === true

  return (
    <aside className="w-full md:w-56 lg:w-64 bg-emerald-50 flex flex-col flex-shrink-0 border-r border-emerald-200 md:h-full overflow-hidden">

      {/* Header */}
      <div className="p-3 border-b border-emerald-200 bg-white">
        <p className="text-emerald-700 text-xs font-bold tracking-widest mb-2 uppercase">
          {tr('dayPlan', lang)}
        </p>
        <div className="bg-emerald-100 rounded-full h-2 mb-1">
          <div className="bg-emerald-500 h-2 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-gray-500 text-xs">{completedCount}/{total} {tr('completed', lang)}</p>
      </div>

      {/* Day List */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {schedule.map((day) => {
          const unlocked = isUnlocked(day.id)
          const done     = progress[day.id]?.completed
          const active   = currentDay === day.id
          const badge    = getDayBadge(day)

          return (
            <button
              key={day.id}
              onClick={() => unlocked && setCurrentDay(day.id)}
              disabled={!unlocked}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all border ${
                !unlocked
                  ? 'opacity-40 cursor-not-allowed bg-white border-transparent text-gray-400'
                  : active
                  ? 'bg-emerald-600 border-emerald-600 text-white font-bold shadow-sm'
                  : done
                  ? 'bg-white border-emerald-200 text-emerald-800 hover:bg-emerald-50'
                  : 'bg-white border-emerald-100 text-gray-600 hover:bg-emerald-50 hover:border-emerald-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{!unlocked ? '🔒' : done ? '✅' : active ? '▶' : '○'}</span>
                <span className="flex-1 truncate font-medium">
                  {day.id === 0 ? tr('quickCrashCourse', lang) : `Day ${day.id}`}
                </span>
                {badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${badge.cls}`}>{badge.icon}</span>
                )}
              </span>
              <p className={`text-[10px] mt-0.5 pl-5 truncate ${active ? 'text-emerald-100' : 'text-gray-400'}`}>
                {day.title[lang]}
              </p>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
