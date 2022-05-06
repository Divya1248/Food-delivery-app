import React from 'react'
import Leftfirst from './Leftfirst'
import Rightfirst from './Rightfirst'
import "./First.css"
const First = () => {
    return (
      <section className='block'>
        <article>
          <Leftfirst />
          <Rightfirst />
        </article>
      </section>
    );
}

export default First
