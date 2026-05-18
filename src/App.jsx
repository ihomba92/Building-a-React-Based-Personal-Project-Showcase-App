import React from 'react'
import NavBar from './layout/NavBar'
import Hero from './components/Hero'
import SideBar from './layout/SideBar'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1e140f]">
      <NavBar />
        <div className="flex flex-1 flex-row w-full">
      {/* sidebar is pinned to the left of the main content */}
      <SideBar />
      {/* This moves everything on the right of the sidebar */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Hero />
       
      </main>
      </div>
  </div>
  )
}

export default App
