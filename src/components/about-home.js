import React from 'react'
import aboutimg from "../assets/pinkkk.avif";

function AboutHome() {
    return (

        <div class=" max-w-[1320px] md:py-[80] py-10 flex mx-auto md:flex-row flex-col lg:items-center">

            <div class="basis-[55%] px-5 ">
                <h1 class=" text-[#F11A7B] text-4xl pb-5 font-bold">About Us</h1>
                <p class="py-3">Amberrent is founded by the supporters of the LGBTQ+ community, we are
          deeply committed to fostering a space where diversity is celebrated and everyone is treated with dignity and
          respect.</p>

                <p>We prioritize your safety and privacy, ensuring a secure platform for all your rental needs.As a platform
                    created by and for the LGBTQ+ community, we understand your unique needs and challenges.We collaborate with
                    landlords and property managers who are committed to providing welcoming and inclusive housing.</p>
                <button class=" my-5 px-2 py-1 bg-[#F11A7B] text-white text-sm lg:px-4 lg:py-2  rounded-lg"><a href='/' class="font-bold">Learn more about us</a></button>
            </div>
            <div class="basis-[45%] pb-5 ">
                <img src={aboutimg} class="w-full rounded-xl " alt='' />
            </div>
        </div>


    )
}

export default AboutHome
