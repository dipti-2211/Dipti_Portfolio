import { CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Thank You!</h1>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Your message has been received. I’ll get back to you within 24 hours.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 text-white shadow-md transition hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 dark:shadow-green-800"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}
