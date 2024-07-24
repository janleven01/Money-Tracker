import { useState } from "react"
import useStore from "../store"

const ThemeSwitch = () => {
  const {theme, setTheme} = useStore((state) => state)
  const [isDark, setIsDark] = useState(theme === "dark")

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div 
        className={`switch ${isDark ? 'light':'dark'}`}
        onClick={toggleTheme}
    >
        <div className={`ball ${isDark ? 'dark': 'light'}`}></div>
    </div>
  )
}

export default ThemeSwitch