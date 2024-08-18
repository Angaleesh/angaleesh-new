import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './sections/Header'
import Sidebar from './sections/Sidebar'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {

  return (
    <>
      <section className='bg-base w-screen h-screen grid grid-cols-5 fixed top-0 bottom-0 z-1'>
        <div className="h-screen before:animate-bgLine border-r border-gray relative"></div>
        <div className="h-screen before:animate-bgLine border-r border-gray relative"></div>
        <div className="h-screen before:animate-bgLine border-r border-gray relative"></div>
        <div className="h-screen before:animate-bgLine border-r border-gray relative"></div>
        <div className="h-screen before:animate-bgLine "></div>
      </section>
      <main className='mx-auto w-[95%] lg:w-[68%]  z-1  h-screen relative flex flex-col gap-5'>
        <Header />
        <section className="w-full flex gap-5 max-lg:flex-col">
          <Sidebar />
          <div className="flex flex-col card-grid gap-5 max-lg:w-full">
            <About />
            <Skills />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
