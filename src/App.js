import React from 'react'
import Navbar from './Navbar'


import Card from './Card'
import Cardlayput from './Cardlayput'
import Cardlayout2 from './Cardlayout2'
import Cardlayout3 from './Cardlayout3'
import Sarch2 from './Sarch2'

const App = () => {
  return (
    <>

    <Navbar/>
    <Sarch2/>
    <Card/>
    <Cardlayput grid coloumn="6"/>
    <Cardlayout2/>
    <Cardlayout3/>
    
    </>
  )
}

export default App