import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app-layout">
      <Sidebar/>
      <Home />
      
    </div>
  )
}

export default App
