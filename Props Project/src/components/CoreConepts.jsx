import React from 'react'
import CoreConcepts from '../CoreConcepts.jsx'
import { CORE_CONCEPTS } from '../data.js'

const CoreConepts = () => {
  return (
     <section id="core-concepts">
              <ul>
                {
                  CORE_CONCEPTS.map((concept) => {
                    return <CoreConcepts key={concept.title} {...concept}/>
                    })
                }
              </ul>
    </section>
  )
}

export default CoreConepts