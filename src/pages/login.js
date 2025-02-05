import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import wavinghand from "../assets/wavinghand.svg";
import leftimage from "../assets/authimage.svg";
import eye from "../assets/eye.png";
import lock from "../assets/lock.png";
import axios from "axios";
import { url } from "../config";

const LogIn = () => {
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const [userData, setUserData] = useState({});

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const loginResponse = await validateLogin();
		if (loginResponse) {
		} else {
			alert("Invalid Login");
		}
	};

	const validateLogin = async () => {
		const loginData = {
			email: email,
			password: password,
		};
		try {
			const res = await axios
				.post(`${url}user/login`, loginData)
				.catch((err) => {
					console.log(err);
				});
			setUserData(res?.data?.user);
			if (res?.data?.message === "Login Successful") {
				sessionStorage.setItem(
					"userData",
					JSON.stringify({
						name: res?.data?.user.firstName,
						email: res?.data?.user.email,
					})
				);
				navigate("/", { state: { userData: res?.data?.user } });
				return true;
			} else {
				return false;
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<div className="flex w-full max-w-[1300px] h-screen bg-[#EC7C64] p-8 lg:p-8 margin: 0 auto">
			<div className="grid grid-cols-2 gap-40 w-full h-full bg-white p-2 lg:p-4 rounded-lg margin: 0 auto ">
				{/* Image section, hidden on small screens */}
				<div className="hidden lg:flex h=[20vh] w=[200vw] items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
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
										type="text"
										name="email"
										value={email}
										onChange={(e) => {
											setemail(e.target.value);
										}}
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
										type="password"
										name="password"
										placeholder="Password"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
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
										onClick={() => {
											navigate("/signup");
										}}
										className="text-base font-black"
										for="remember"
									>
										Sign Up
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

export default LogIn;
