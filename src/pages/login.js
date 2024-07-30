import React from "react";
import wavinghand from "../assets/wavinghand.png";
import leftimage from "../assets/leftimage.png";
import eye from "../assets/eye.png";
import lock from "../assets/lock.png";

function LogIn() {
    return (
        <div className="flex w-full h-screen bg-[#EC7C64] p-8 lg:p-16">
            <div className="flex w-full h-full bg-white p-2 lg:p-4 rounded-lg">
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
                            <span className="text-[#EC7C64] ml- 6">
                                Welcome
                            </span>
                            <span className="text-black ml-6"> Back</span>
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
                                    style={{
                                        backgroundImage: `url(${lock})`,
                                        backgroundSize: "20px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition:
                                            "right 10px  center",
                                    }}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Password"
                                    type="password"
                                    style={{
                                        backgroundImage: `url(${eye})`,
                                        backgroundSize: "20px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition:
                                            "right 10px  center",
                                    }}
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
                                    Log In
                                </button>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <p className="font-medium text-base">
                                    Don't have an account?
                                </p>
                                <button
                                    className="text-base font-black"
                                    for="remember"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
