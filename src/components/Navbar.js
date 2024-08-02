// src/components/Navbar.js
import React from "react";
import { BsPersonSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

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
		<div className="bg-[#3E001F] flex flex-row text-[#F6FFCE] items-center sticky top-0 justify-between p-4 mx-8 mob:text-center mob:items-center mob:mx-0">
			
			<img src={logo} onClick={()=>{navigate("/")}} alt="LOGO" width={100} height={100} className="text-2xl font-bold font-sans cursor-pointer" />
			<ul className="nav-items flex flex-row items-center right-0 justify-items-end justify-end gap-16 mob:gap-1">
				<li className="cursor-pointer" onClick={handleChange}>
					List with us
				</li>
				<li
					className="cursor-pointer"
					onClick={() => {
						navigate("/stories");
					}}
				>
					Stories
				</li>
				<li className="cursor-pointer" onClick={handleMyList}>
					My lists
				</li>
				<li
					className="cursor-pointer"
					onClick={() => {
						navigate("/productsPage");
					}}
				>
					All Properties
				</li>
				<BsPersonSquare onClick={() => navigate("/login")} />
			</ul>
		</div>
	);
};

export default Navbar;
