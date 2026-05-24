export type Language = 'en' | 'ru' | 'ur'

export interface Translation {
  en: string
  ru: string
  ur: string
}

export interface StudyLink {
  label: string
  url: string
}

export interface DayContent {
  id: number
  title: Translation
  section: string
  type: 'study' | 'review' | 'exam' | 'crash-course'
  estimatedTime: string
  topics: Translation[]
  studyLinks: StudyLink[]
  notes?: Translation  // AI-generated notes (backbencher style for crash course)
}

export interface QuizQuestion {
  id: string
  day: number
  question: Translation
  options: Translation[]
  correct: number // 0-3
  explanation: Translation
}

export interface DayProgress {
  completed: boolean
  quizScore: number | null
  quizAnswers: (number | null)[]
  notes: {
    freeWrite: string
    keyConcept: string
    importantPoints: string
    myQuestions: string
  }
}

export interface AppState {
  days: Record<number, DayProgress>
  language: Language
  currentDay: number
}

export const DEFAULT_DAY_PROGRESS: DayProgress = {
  completed: false,
  quizScore: null,
  quizAnswers: [],
  notes: {
    freeWrite: '',
    keyConcept: '',
    importantPoints: '',
    myQuestions: '',
  },
}

export const DEFAULT_APP_STATE: AppState = {
  days: {},
  language: 'en',
  currentDay: 0, // 0 = quick crash course day
}
