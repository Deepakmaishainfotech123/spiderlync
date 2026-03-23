import React, { useEffect } from 'react'
import DeepLinkingFeatures from './components/DeepLinkingFeatures'
import About from './components/About'
import Footer from './components/Footer'
import Tesst from './components/Tesst'
import Header from './components/Header'
import Plans from './components/Plans'
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
    const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
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