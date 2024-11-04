import React from 'react'
import { Element, Link as LinkScroll  } from 'react-scroll'
import Button from '../components/Button'


const Hero = () => {
  return (
    <section className="relative  pt-60 pb-36 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-10">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <h1 className="mb-6 h1 text-black-100 uppercase max-lg:mb-7 max-lg:h1 max-md:mb-8 max-md:mt-12 max-md:text-5xl max-md:leading-[62px]">
            Democratize the Use of Private Chefs
            </h1>
            <p className="max-w-500 text-p6 mb-14 body-1 ">
            Every person and family in America deserves the right to enjoy home-cooked meals, no matter how busy life becomes.
            </p>
            <LinkScroll to='contactus' offset={100} spy smooth
            className='max-md:hidden'>
              <Button icon="/images/feast-hero-button.svg">Contact Us</Button>
            </LinkScroll>
          </div>
        </div>

        {/* <div>
          <img 
          src="/images/app-mockup.jpg" 
          alt="mockup"
          className='absolute mt-52 -top-4 left-[calc(48%)] w-[720px] pointer-events-none hero-img_res max-md:hidden'
          />
        </div> */}

      </Element>

    </section>
  )
}

export default Hero