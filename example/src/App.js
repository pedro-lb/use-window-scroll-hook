import React from 'react'
import { useMyHook } from 'use-window-scroll-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App