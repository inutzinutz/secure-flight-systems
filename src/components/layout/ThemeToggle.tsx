import { useState, useEffect } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Add transition class to body for smooth color transitions
    document.documentElement.style.setProperty('--theme-transition', '0.5s');
    document.body.classList.add('theme-transitioning');
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
      document.documentElement.style.removeProperty('--theme-transition');
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-secondary hover:bg-accent border border-border flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background glow effect during transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3, opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-10 h-10 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-amber-400'
            }`}
          />
        )}
      </AnimatePresence>

      {/* Sparkle effects */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  scale: 0, 
                  opacity: 1,
                  x: 0,
                  y: 0 
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                  x: Math.cos((i * 60) * Math.PI / 180) * 25,
                  y: Math.sin((i * 60) * Math.PI / 180) * 25
                }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.03
                }}
                className="absolute"
              >
                <Sparkles className={`w-2 h-2 ${isDark ? 'text-blue-400' : 'text-amber-400'}`} />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Sun icon */}
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0, 
          scale: isDark ? 0 : 1,
          opacity: isDark ? 0 : 1
        }}
        transition={{ 
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Moon icon */}
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : -180, 
          scale: isDark ? 1 : 0,
          opacity: isDark ? 1 : 0
        }}
        transition={{ 
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Rotating rays for sun */}
      <AnimatePresence>
        {!isDark && !isTransitioning && (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.3, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.3 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute w-8 h-8"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-full"
                style={{ transform: `rotate(${i * 45}deg)` }}
              >
                <div className="w-0.5 h-1 bg-primary/30 mx-auto" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stars around moon */}
      <AnimatePresence>
        {isDark && !isTransitioning && (
          <>
            {[
              { x: -8, y: -6, delay: 0, size: 'w-1 h-1' },
              { x: 8, y: -4, delay: 0.2, size: 'w-0.5 h-0.5' },
              { x: 6, y: 6, delay: 0.4, size: 'w-1 h-1' },
            ].map((star, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: 1
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { 
                    duration: 2,
                    repeat: Infinity,
                    delay: star.delay
                  },
                  scale: { duration: 0.3 }
                }}
                className={`absolute ${star.size} rounded-full bg-primary`}
                style={{ 
                  left: `calc(50% + ${star.x}px)`,
                  top: `calc(50% + ${star.y}px)`
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
