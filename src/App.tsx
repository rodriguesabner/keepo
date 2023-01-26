import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Home from './screens/Home'

function App (): JSX.Element {
  return (
    <div className="App">
      <Home/>
      <GlobalStyles />
    </div>
  )
}

export default App
