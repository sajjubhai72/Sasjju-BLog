import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'; // Home page component
import Blog from './Components/Blog'; // Blog page component
import SinglePost from './Components/SinglePost'; // Single Post component
import AuthorPage from './Components/AuthorPage'; // Author page component
import Contact from './Components/Contact';

function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/pages" element={<AuthorPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
