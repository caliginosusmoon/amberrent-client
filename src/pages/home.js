import React from "react";
import Hero_Section from "../components/hero-section";
import WhyChooseUs from "../components/why-choose-us";
import BelongAndThrive from "../components/belong-and-thrive";
import SelectPurpose from "../components/select-purpose";
import StoriesHome from "../components/stories-home";
import { BsPersonSquare } from "react-icons/bs";

function Home() {
	return (
		<div>
			<div className="bg-[#3E001F] flex flex-row text-[#F6FFCE] items-center sticky top-0 justify-between p-4 mx-8 ">
				<h2 className="text-2xl font-bold font-sans">LOGO</h2>
				<ul className="flex flex-row items-center right-0 justify-items-end justify-end gap-16">
					<li>List with us</li>
					<li>Stories</li>
					<li>My lists</li>
					<li>My shortlists</li>
					<BsPersonSquare />
				</ul>
			</div>

			<Hero_Section />
			<WhyChooseUs />
			<BelongAndThrive />
			<SelectPurpose />
			<StoriesHome />
		</div>
	);
}

export default Home;
