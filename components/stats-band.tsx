"use client"

import { useEffect, useRef, useState } from "react"
import { stats } from "@/content/stats"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsBand() {
  return (
    <section className="bg-[#f9f5ef] py-14 md:py-16 px-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center items-center justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <span className="font-extrabold text-3xl md:text-4xl text-[#0070f3]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <p className="text-gray-500 text-sm md:text-base font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
