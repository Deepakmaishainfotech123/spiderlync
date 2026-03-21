import React from 'react'
import DeepLinkingFeatures from './components/DeepLinkingFeatures'
import About from './components/About'
import Footer from './components/Footer'
import Tesst from './components/Tesst'
import Header from './components/Header'
import Plans from './components/Plans'

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Tesst/> */}
      <About/>
      <DeepLinkingFeatures/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default App