import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollTop = () => {
  const location = useLocation()
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.search])
  return null
}