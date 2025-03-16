"use client"

import { useEffect } from "react"

export default function AnimationObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealSections = document.querySelectorAll(".reveal-section")
    const revealItems = document.querySelectorAll(".reveal-item")

    revealSections.forEach((section) => {
      observer.observe(section)
    })

    revealItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      revealSections.forEach((section) => {
        observer.unobserve(section)
      })

      revealItems.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return null
}

