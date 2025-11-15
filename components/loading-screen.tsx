"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading (remove this in production and tie to actual loading state)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative">
            {/* Apple-style spinner */}
            <motion.div
              className="relative w-16 h-16"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-1 h-4 bg-foreground rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transformOrigin: "0 -24px",
                    transform: `rotate(${index * 30}deg)`,
                  }}
                  animate={{
                    opacity: [0.1, 1, 0.1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Company name with fade animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h2 className="text-xl font-semibold tracking-tight">AvalonGroup</h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-sm text-foreground/60 mt-2"
              >
                Building the future
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
