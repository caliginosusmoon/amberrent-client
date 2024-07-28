import React from "react";
import wavinghand from "../assets/wavinghand.png";
import leftimage from "../assets/leftimage.png";

function SignUp() {
    return (
        <div className="flex w-full h-screen bg-[#EC7C64] p-8 lg:p-16">
            <div className="flex w-full h-full bg-white p-2 lg:p-4">
                {/* Image section, hidden on small screens */}
                <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={leftimage}
                        alt="Left Image"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Form section */}
                <div className="w-full flex items-center justify-center lg:w-1/2">
                    <div className="font-mono">
                        <h1 className="flex items-center text-5xl font-bold">
                            <span className="text-custom-pink ml- 6">New</span>
                            <span className="text-black ml-6"> Here?</span>
                            <img
                                src={wavinghand}
                                alt="Waving Hand emoji"
                                className="w-10 h-10 ml-6"
                            />
                        </h1>
                        <p className="font-medium mt-6">
                            Please enter your details
                        </p>
                        <div className="mt-4">
                            <div>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Email"
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Password"
                                    type="password"
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Confirm Password"
                                    type="password"
                                ></input>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="remember"
                                    ></input>
                                    <label
                                        className="ml-2 font-medium text-base"
                                        for="remember"
                                    >
                                        Remember for 30 days
                                    </label>
                                </div>
                                <button className="ml-8 font-medium text-base text-gray-400">
                                    Forgot password
                                </button>
                            </div>
                            <div className="mt-6 flex">
                                <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-full py-3 bg-[#EC7C64] text-white text-lg font-bold rounded-xl">
                                    Sign Up
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <p className="font-medium text-base">
                                    Already have an account?
                                </p>
                                <button
                                    className="text-base font-black"
                                    for="remember"
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
