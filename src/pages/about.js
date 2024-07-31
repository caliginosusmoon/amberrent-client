import React from 'react';
import aboutimg1 from "../assets/about1.avif";
import aboutimg2 from "../assets/about2.avif";
import aboutimg3 from "../assets/about3.avif";

function AboutPage() {
  return (
    <div>
      <div class="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24 px-8 ">
    <img src={aboutimg1} alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" style={{filter: "brightness(30%)"}}/>
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}></div>
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{clippath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Amberrent, founded by supporters of the LGBTQ+ community, we are
          deeply committed to fostering a space where diversity is celebrated and everyone is treated with dignity and
          respect.</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Years Experience</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">3.5</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Listed Properties</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">900+</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">States</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">14</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Happy Users</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">100K</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>


  <div class=" max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col lg:items-center ">
    <div class="basis-[45%] pb-5 ">
      <img src={aboutimg2} class="w-full rounded-xl" alt=""/>
    </div>
    <div class="basis-[55%] px-5">
      <h1 class="text-4xl pb-5">Our mission is to provide equal access to housing opportunities for LGBTQ+ Community
      </h1>
      <p class="py-3">We foster Safe Spaces by partnering with landlords and property managers who share our values of
        acceptance and equality.We offer resources and support to help our users navigate the rental process with
        confidence.</p>

      <p> Our mission is to provide a reliable and welcoming rental platform that caters specifically to the needs of
        the LGBTQ+ community.
      </p>

    </div>
  </div>

  <div class=" max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col lg:items-center">

    <div class="basis-[55%] px-5">
      <h1 class="text-4xl pb-5">Why Choose Us</h1>
      <p class="py-3">We provide Comprehensive Listings, where you can explore a wide range of rental properties, from
        cozy apartments to spacious homes, all vetted for LGBTQ+ friendliness.</p>

      <p>We prioritize your safety and privacy, ensuring a secure platform for all your rental needs.As a platform
        created by and for the LGBTQ+ community, we understand your unique needs and challenges.We collaborate with
        landlords and property managers who are committed to providing welcoming and inclusive housing.</p>
      <button class=" my-5 px-2 py-1 bg-[#3E001F] text-white text-sm lg:px-4 lg:py-2  rounded-lg">Explore the
        Properties</button>
    </div>
    <div class="basis-[45%] pb-5 ">
      <img src={aboutimg3} class="w-full rounded-xl" alt=''/>
    </div>
  </div>

    </div>
  )
}

export default AboutPage
