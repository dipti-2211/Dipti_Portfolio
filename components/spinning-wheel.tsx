"use client"

import { Code } from "lucide-react"

export function SpinningWheel() {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative">
        {/* Outer spinning ring with rainbow gradient */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-pink-500 animate-spin shadow-2xl">
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center shadow-inner">
            <div className="text-center">
              <div className="relative">
                <Code className="h-12 w-12 md:h-16 md:w-16 text-white mx-auto mb-2 animate-pulse" />
                <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl"></div>
              </div>
              <p className="text-white font-bold text-lg md:text-xl mb-1">Coding</p>
              <p className="text-purple-400 text-sm md:text-base font-medium">Journey</p>
            </div>
          </div>
        </div>

        {/* Decorative dots around the wheel */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "6s", animationDirection: "reverse" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full opacity-60"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-140px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
