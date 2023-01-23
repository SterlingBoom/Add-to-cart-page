import React from 'react'
import Navbar from './components/Navbar'
import OrangeBox from './components/OrangeBox'
import AppProvider from './AppContext'

function App() {
  return (
    <AppProvider>
      <Navbar />
      <OrangeBox />
    </AppProvider>
  )
}
export default App
