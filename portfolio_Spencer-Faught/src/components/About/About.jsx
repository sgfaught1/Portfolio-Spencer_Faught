import React from 'react'
import { getImageUrl } from '../../utils'

export default function About() {
  return (
    <section>
        <h2>About</h2>
        <div>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me with a laptop" />
        </div>
    </section>
  )
}
