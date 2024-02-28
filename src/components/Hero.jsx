import React from 'react'
import BannerHeading from './BannerHeading'
import image from '../assets/images/wolf.png'
import herobg from '../assets/images/hero-bg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>

            <section
                className={`bg-hero-bg relative bg-cover bg-center bg-no-repeat position-absolute`}
            >

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex justify-between lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-white text-start ltr:sm:text-left rtl:sm:text-right">

                        <BannerHeading />

                        <div className="mt-8 flex flex-wrap gap-6 text-center">
                            <Link
                                to="/"
                                className="block w-full border-b-4 px-8 py-3 text-xl uppercase font-medium text-white transition-all duration-500 shadow hover:bg-white hover:text-black focus:outline-none active:bg-zinc-300 sm:w-auto"
                            >
                                View our Portfolio
                            </Link>

                            <Link
                                to="/"
                                className="block w-full border-b-4 px-8 py-3 text-xl uppercase font-medium text-white transition-all duration-500 shadow hover:bg-white hover:text-black focus:outline-none active:bg-zinc-300 sm:w-auto"
                            >
                                START A PROJECT
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img className='opacity-60' src={image} alt="" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero
