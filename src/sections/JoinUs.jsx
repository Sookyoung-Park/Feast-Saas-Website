import React from 'react'
import { Element } from 'react-scroll'
import Button from '../components/Button'
import { Link as LinkScroll } from "react-scroll";

const JoinUs = () => {

    return (
        <section>
            <Element name="joinus" className='relative'>
                {/* flex flex-col items-center justify-center */}
            <div className="container relative z-2 py-28 mt-10">
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p7 text-center'>
                        We are always onboarding customers and chefs!
                    </h3>
                    <p className='body-3 text-p6 mb-16 max-w-640 max-lg:max-w-sm'>
                        Our service makes private chefs accessible, allowing chefs to come to clients’ homes to prepare multiple meals at once. 
                        Customers can enjoy quality home-cooked meals, saving time and offering a convenient, cost-effective alternative to traditional delivery. 
                        By connecting clients with skilled chefs, we’re building a unique “creator economy” that offers chefs part-time, flexible work opportunities to share their culinary skills.
                    </p>
                    <LinkScroll
                        to={'download'}
                        offset={-100}
                        spy
                        smooth
                        activeClass="nav-active"
                        className="base-bold text-black uppercase transition-colors duration-500 cursor-pointer hover:text-p2 max-lg:my-4 max-lg:h5 max-lg:text-p8"
                        >
                    <Button 
                    icon="/images/feast-hero-button.svg"
                    >Connect with Us</Button>
                    </LinkScroll>
                </div>    
            </div>
            </Element>
        </section>
    )
}

export default JoinUs