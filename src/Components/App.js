import React from 'react'
import Header from './Header'

const App = ({ children }) =>
  <div>
    <Header />
    { children || "home" }
  </div>

export default App
