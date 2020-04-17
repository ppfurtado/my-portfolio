import React from 'react'

import About from './About'
import Resume from './Resume/Resume'
import Works from './Works'
import Blog from './Blog'
import Contact from './Contact'

export default function Content() {
  return (
    <>
      <Works />
      <Blog />
      <Contact />
      <About />
      <Resume />
    </>
  )
}
