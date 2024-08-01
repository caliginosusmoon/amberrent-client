

import React from "react";

const ContactOwner = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div>



            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative mx-auto p-4 w-full max-w-md max-h-full">

                    <div class="relative  bg-[#FFE5AD] rounded-lg shadow dark:bg-gray-700">

                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Contact Owner
                            </h3>
                            <button onClick={onClose} type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>

                        </div>

                        <h6 class="m-5 text-xs">Please Provide your contact details for the owner to contact you.</h6>


                        <div class="p-4 md:p-5">
                            <form class="space-y-4" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm  font-bold text-gray-900 dark:text-white">Enter Your Name</label>
                                    <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Reema Das" required />
                                </div>
                                <div>
                                    <label for="phoneNumber" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="XXXXXXXXXX" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label for="remember" class="ms-2 text-sm font-bold text-gray-900 dark:text-gray-300">Are You an Interested Buyer</label>
                                    </div>

                                </div>
                                <button type="submit" onClick={onClose} class=" bg-[#3E001F] w-full text-white  hover:bg-[#2e0d1e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Contact Owner</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactOwner;
