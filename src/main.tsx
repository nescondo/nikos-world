import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import AboutMe from './pages/about-me/about-me.tsx'
import Projects from './pages/projects/projects.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>,
)
