
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      {/* TO-DO: 
          Make routes to GitHub, LinkedIn, YouTube? (maybe a good time to make a dev channel?) */}
      {/* <Route path="about-me" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} /> */}
    </Routes>
  </BrowserRouter>,
)
