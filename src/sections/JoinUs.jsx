import React from 'react'
import { Element } from 'react-scroll'
// import { faq } from '../constants/index.jsx'
// import FaqItem from '../components/FaqItem.jsx'

const JoinUs = () => {

    return (
        <section>
            <Element name="joinus" className='relative'>
            <div className="container relative z-2 py-28">
                <div>
                <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p7'>
                    We are always onboarding customers and chefs!
                </h3>
                <p className='body-1 text-p6 max-lg:max-w-sm'>
                Our goal is to make private chefs accessible to consumers by offering a service where chefs
                come to clients’ homes to prepare meals. This model allows individuals to enjoy the benefits
                of home-cooked meals, saving time and offering a convenient alternative to traditional meal
                delivery. Instead of ordering from a restaurant, customers can have multiple meals prepared at
                once in their own kitchens, ensuring quality, variety, and a cost-effective solution. By creating
                a platform that connects consumers with skilled chefs, we aim to build a unique "creator
                economy" where chefs can have additional part-time and flexible employment while using
                their culinary skills.
                </p>
                </div>
                
                {/* faq logo and lists
                <div className='faq-glow_before relative z-2 bg-s3/5 mt-20 rounded-7xl'>
                <div className='container flex gap-10 msx-lg:block'>
                    <div className='rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2/10 bg-s1'>
                        <img 
                        src="/images/faq-logo.svg" 
                        alt="logo"
                        className='size-1/2'/>
                    </div>
    
                    <div className='relative flex-1 pt-24 max-md:hidden'>
                    {faq.slice(0, halfLength).map((item, index) => (
                        <div>
                        <FaqItem key={item.id} item={item} index={index}/>
                        </div>
                    ))}
                    </div>
                    <div className='relative flex-1 lg:pt-24 max-md:pt-20'>
                    {faq.slice(halfLength).map((item, index) => (
                        <div>
                        <FaqItem key={item.id} item={item} index={halfLength+index}/>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='faq-lin_after aboslute left-[calc-(50%-1px)] -top-1 -z-1 h-full w-0.5 bg-s2 max-lg:hidden'/>
                </div> */}
    
            </div>
            </Element>
        </section>
    )
}

export default JoinUs