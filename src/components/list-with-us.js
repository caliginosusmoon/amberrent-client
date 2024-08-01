import axios from "axios";
import React, { useState } from "react";
import { url } from "../config";
import { useNavigate } from "react-router-dom";

const ListWithUs = () => {
	const [currentPage, setCurrentPage] = useState("page1");
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phone: "",
		city: "",
		state: "",
		country: "",
		pincode: "",

		isLGBTQFriendly: false,
	});

	const navigate = useNavigate();

	const userId = JSON.parse(sessionStorage.getItem("userData")).userId;
	const handleChange = (e) => {
		setFormData({
			...formData,

			[e.target.name]: e.target.value,
		});
		console.log(e.target.name, e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(formData);
			const respose = await axios
				.put(`${url}user/${userId}`, formData)
				.then(() => {
					alert("You are registered to list your property!");
					navigate("/addproduct");
					const currentUserData = JSON.parse(
						sessionStorage.getItem("userData")
					);
					currentUserData.role = "Provider";
					sessionStorage.setItem(
						"userData",
						JSON.stringify(currentUserData)
					);
				});
		} catch (error) {
			alert("Registration Failed!");
			console.log("error", error);
		}
	};

	return (
		<div className="bg-[#f2a592] flex justify-center items-center h-screen m-0">
			<div
				className="bg-white p-8 rounded-2xl shadow-lg w-[900px] max-h-[90vh] overflow-y-auto"
				id="form-container-list"
			>
				<h2 className="text-[#f7945e] text-2xl text-center mb-5">
					Hello!
				</h2>
				<form id="form-list">
					<label htmlFor="firstName" className="mb-1 font-bold">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						required
					/>

					<label htmlFor="lastName" className="mb-1 font-bold">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						required
					/>

					{/* <label htmlFor="email" className="mb-1 font-bold">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full p-2 mb-2 border border-gray-300 rounded"
							required
						/>

						<label htmlFor="password" className="mb-1 font-bold">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full p-2 mb-2 border border-gray-300 rounded"
							required
						/> */}

					<label htmlFor="phone" className="mb-1 font-bold">
						Phone
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
					/>

					<label htmlFor="city" className="mb-1 font-bold">
						City
					</label>
					<input
						type="text"
						id="city"
						name="city"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
					/>

					<label htmlFor="state" className="mb-1 font-bold">
						State
					</label>
					<input
						type="text"
						id="state"
						name="state"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
					/>

					<label htmlFor="country" className="mb-1 font-bold">
						Country
					</label>
					<input
						type="text"
						id="country"
						name="country"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
					/>

					<label htmlFor="pincode" className="mb-1 font-bold">
						Pincode
					</label>
					<input
						type="text"
						id="pincode"
						name="pincode"
						onChange={handleChange}
						className="w-full p-2 mb-2 border border-gray-300 rounded"
					/>

					<div className="flex flex-row items-center justify-center gap-4 my-4">
						<label htmlFor="isLGBTQFriendly" className=" font-bold">
							LGBTQ Friendly
						</label>
						<input
							type="checkbox"
							id="isLGBTQFriendly"
							name="isLGBTQFriendly"
							value={true}
							onChange={handleChange}
							className=""
						/>
					</div>
					<div className="flex justify-center items-center">
						<button
							type="button"
							onClick={handleSubmit}
							className="bg-[#f7945e] text-white p-2 rounded cursor-pointer text-lg hover:bg-[#e6835c]"
						>
							Register to List Properties
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ListWithUs;
