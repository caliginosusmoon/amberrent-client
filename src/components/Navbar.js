// src/components/Navbar.js
import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const handleChange = () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"));
		// const role = sessionStorage.getItem("role");
		console.log("role", userData.role);
		if (userData.userId && userData.role === "Provider") {
			navigate(`/addProduct`);
		} else if (userData.userId && userData.role === "Seeker") {
			navigate(`/register/user/${userData.userId}`);
		}
	};

	const handleMyList = () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"));
		// const role = sessionStorage.getItem("role");
		console.log("role", userData.role);
		if (userData.userId && userData.role === "Provider") {
			navigate(`/my-listings/${userData.userId}`);
		} else if (userData.userId && userData.role === "Seeker") {
			alert("Register to list with us!");
		} else {
			alert("Register to list with us!");
		}
	};
	return (
		<div className="bg-[#3E001F] flex flex-row text-[#F6FFCE] items-center sticky top-0 justify-between p-4 mx-8">
			<h2
				className="text-2xl font-bold font-sans"
				onClick={() => {
					navigate("/");
				}}
			>
				LOGO
			</h2>
			<ul className="flex flex-row items-center right-0 justify-items-end justify-end gap-16">
				<li onClick={handleChange}>List with us</li>
				<li
					onClick={() => {
						navigate("/stories");
					}}
				>
					Stories
				</li>
				<li onClick={handleMyList}>My lists</li>
				<li
					onClick={() => {
						navigate("/productsPage");
					}}
				>
					All Properties
				</li>
				<BsPersonSquare />
			</ul>
		</div>
	);
};

export default Navbar;
