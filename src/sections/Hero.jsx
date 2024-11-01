import React from 'react'
import { Element, Link as LinkScroll  } from 'react-scroll'
import Button from '../components/Button'


const Hero = () => {
  return (
    <section className="relative bg-s2 pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className='caption small-2 uppercase text-p3'>
              Professional & Insightful
            </div>
            <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Crafting
            Digial
            Experiences
            </h1>
            <p className="max-w-400 mb-14 body-1 max-md:mb-10">
            that inspire today and shape tomorrow.
            </p>
            <LinkScroll to='features' offset={100} spy smooth>
              <Button icon="/images/zap.svg">View Our Service</Button>
            </LinkScroll>
          </div>
        </div>

        <div>
          <img 
          src="/images/hero-1.png" 
          alt="hero"
          className='absolute -top-4 left-[calc(42%)] w-[900px] pointer-events-none hero-img_res max-md:hidden'
          />
        </div>

      </Element>

    </section>
  )
}

export default Hero