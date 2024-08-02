import React from "react";
import Hero_Section from "../components/hero-section";
import WhyChooseUs from "../components/why-choose-us";
import BelongAndThrive from "../components/belong-and-thrive";
import SelectPurpose from "../components/select-purpose";
import StoriesHome from "../components/stories-home";
import { BsPersonSquare } from "react-icons/bs";
import AboutHome from "../components/about-home";

import Logo from "../assets/logo.svg";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocateOutline } from "react-icons/io5";
// import { GrLocation } from 'react-iconis/gr'

function Home() {
	return (
		<div>
			<Hero_Section />
			<WhyChooseUs />
			<BelongAndThrive />
			<SelectPurpose />
			<StoriesHome />
			<AboutHome />
			<footer class="bg-[#3E001F] ">
				<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
					<div class="md:flex md:justify-between">
						<div class="mb-6 md:mb-0">
							<a
								href="/"
								class="flex items-center"
							>
								<img
									src={Logo}
									alt="Amberrent Logo"
									width={100} 
									height={100}
								/>
								
							</a>
						</div>
						<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
							<div>
								<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
									Contact Us
								</h2>
								<ul class="text-gray-500 dark:text-gray-400 font-medium">
									<li class="mb-4 text-white flex items-center justify-center gap-2 lg:justify-start">
										<IoCallOutline />
										+919466745
									</li>
									<li class="mb-4  text-white flex items-center justify-center gap-2 lg:justify-start">
										<IoLocateOutline />
										51 Street, Goa
									</li>
								</ul>
							</div>
							<div>
								<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
									Follow us
								</h2>
								<ul class="text-white font-medium">
									<li class="mb-4">
										<a
											href="https://github.com/caliginosusmoon/"
											class="hover:underline "
										>
											Github
										</a>
									</li>
									<li>
										<a
											href="https://discord.gg/"
											class="hover:underline"
										>
											Discord
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h2 class="mb-6 text-sm font-semibold  uppercase text-white">
									Legal
								</h2>
								<ul class="text-white  font-medium">
									<li class="mb-4">
										<a href="/" class="hover:underline">
											Privacy Policy
										</a>
									</li>
									<li>
										<a href="/" class="hover:underline">
											Terms &amp; Conditions
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<div class="sm:flex sm:items-center sm:justify-between">
						<span class="text-sm text-white sm:text-center ">
							© 2024{" "}
							<a href="/" class="hover:underline">
								Amberrent™
							</a>
							. All Rights Reserved.
						</span>
						<div class="flex mt-4 sm:justify-center sm:mt-0">
							<FaFacebook class="text-white hover:text-gray-900 dark:hover:text-white ms-5" />
							<FaDiscord class="text-white hover:text-gray-900 dark:hover:text-white ms-5" />
							<FaSquareXTwitter class="text-white hover:text-gray-900 dark:hover:text-white ms-5" />
							<FaGithub class="text-white hover:text-gray-900 dark:hover:text-white ms-5" />
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
