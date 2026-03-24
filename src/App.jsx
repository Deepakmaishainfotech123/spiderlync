import React, { useEffect } from 'react'
import DeepLinkingFeatures from './components/DeepLinkingFeatures'
import About from './components/About'

import Tesst from './components/Tesst'
import Plans from './components/Plans'
import { useThemeStore } from "./store/useThemeStore";
import { Route, Routes } from 'react-router-dom'
import Body from './Body'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Check from './components/Check'
import Learning from './components/Learning'

const App = () => {
    const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <div>
        <Cursor />
     <Routes>
        
      <Route base="/" element={<Body/>}>
      <Route path='/' element={<About/>}/>
      
      <Route path='/check' element={<Check/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
     </Routes>

    </div>
  )
}

export default App