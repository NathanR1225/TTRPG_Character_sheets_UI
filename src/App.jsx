import { useState } from 'react'
import SheetListContainer from './SheetList/SheetListContainer'
import SheetContainer from './Sheet/SheetContainer'
import './App.scss'

function App() {
  const [barWidth, setBarWidth] = useState(200)

  return (
    <div>
      <SheetListContainer width={barWidth}/>
      <SheetContainer width={barWidth}/>
    </div>
  )
}

export default App
