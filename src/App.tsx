import React, { useEffect } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Home from './screens/Home'
import settings from './config/settings.json'

function App (): JSX.Element {
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]')
    // @ts-expect-error
    metaThemeColor.setAttribute('content', settings.app.background_color)
  }, [])

  return (
    <div className="App">
      <Home/>
      <GlobalStyles />
    </div>
  )
}

export default App
