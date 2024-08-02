import React, { useState } from "react";
import wavinghand from "../assets/wavinghand.svg";
import leftimage from "../assets/authimage.svg";
import eye from "../assets/eye.png";
import lock from "../assets/lock.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../config";

const SignUp = () => {
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password != confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const response = await axios.post(`${url}user/add`, {
				email,
				password,
			});
			console.log("Registration successful");
			window.location.href = "/login";
		} catch (err) {
			console.error("Registration failed:", err);
			alert("Registration failed. Please try again.");
		}
	};

	return (
		<div className="flex w-full h-screen bg-[#fec1e0] p-8 lg:p-16">
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
				<form onSubmit={handleSubmit}>
					<div className="w-full flex items-center justify-center lg:w-1/2">
						<div className="font-mono">
							<h1 className="flex items-center text-5xl font-bold">
								<span className="text-[#661c41] ml- 6">
									New
								</span>
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
										type="text"
										id="email"
										value={email}
										onChange={(e) =>
											setemail(e.target.value)
										}
										required
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
										type="text"
										id="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										required
										className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
										placeholder="Password"
										style={{
											backgroundImage: `url(${eye})`,
											backgroundSize: "20px",
											backgroundRepeat: "no-repeat",
											backgroundPosition:
												"right 10px  center",
										}}
									></input>
								</div>
								<div>
									<input
										type="password"
										id="confirmPassword"
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
										required
										className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
										placeholder="Confirm Password"
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
									<button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out w-full py-3 bg-[#3E001F] text-white text-lg font-bold rounded-xl">
										Sign Up
									</button>
								</div>
								<div className="mt-6 flex justify-between items-center">
									<p className="font-medium text-base">
										Already have an account?
									</p>
									<button
										onClick={() => {
											navigate("/");
										}}
										className="text-base font-black"
										for="remember"
									>
										Log in
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
