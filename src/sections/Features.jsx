import React from 'react'
import {Element} from 'react-scroll'
import { details, features } from '../constants'

const Features = () => {
  return (
    <section>
      <Element name="features" >
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowarp lg:mt-40 xl:mt-40 border-2 border-s5/10 rounded-7xl md:overflow-hidden max-md:flex-col feature-after max-md:border-none max-md:rounded-none max-md:gap-0">
            {features.map(({id, icon, caption,title, text, button}) => (
              <div 
              key={id}
              className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g1 max-md:border-2 max-md:border-p7/10 max-md:rounded-3xl max-md:flex-320 max-md:mt-20"
              >
                <div className='w-full flex justify-start items-start'>
                  <div className='-ml-3 mb-8 flex items-center justify-center flex-col'>
                    <div className='w-0.5 h-16 bg-s3/10'/>
                    <img 
                    src={icon} 
                    className="size-40 -mt-6 object-contain"
                    alt="feature-icon"
                    />
                  </div>
                </div>

                <p className='caption mb-5 max-md:mb-6'>{caption}</p>
                <h2 className='max-w-400 mb-7 h3 text-p7 max-md:mb-6 max-md:h5'>{title}</h2>
                <p className='mb-11 body-3 text-p6 max-md:mb-8 max-md:body-3'>{text}</p>
              </div>
            ))}

            <ul className='relative flex justify-around flex-grow px-[5%] border-2 border-s3/10 rounded-7xl max-md:hidden'>
              {details.map(({id, icon, title}) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                    <div className='flex items-center justify-center mx-auto mb-3 border-2 border-s3/5 rounded-full hover:border-p3/50 transition-all duration-500 shadow-500 size-20'>
                      <img 
                      src={icon} 
                      alt={title}
                      className="size-20/20 object-contain z-20"
                      />
                    </div>

                    <h3 className='text-p7 relative z-2 max-w-36 mx-auto my-0 mt-6 base-small text-center uppercase'>
                      {title}  
                    </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Features