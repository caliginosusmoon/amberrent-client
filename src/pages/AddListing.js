import React, { useState } from "react";
import axios from "axios";
import { url } from "../config";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
	const userId = JSON.parse(sessionStorage.getItem("userData")).userId;
	const [formData, setFormData] = useState({
		userId: userId,
		title: "",
		location: {
			address: "",
			city: "",
			state: "",
		},
		description: "",
		price: 0,
		image: "",
		category: "",
		beds: 0,
		baths: 0,
		balcony: 0,
		details: {
			superBuiltArea: 0,
			additionalRooms: "",
			floor: 0,
			totalFloors: 0,
			parking: "",
			furnished: "",
			maintenance: 0,
		},
		features: {
			ageOfConstruction: "",
			facing: "",
			status: "",
			visitorParking: false,
			park: false,
			waterStorage: false,
			friendlyNeighborhood: false,
		},
		photos: ["", ""],
		owner: {
			name: "",
			contact: "",
		},
		available: true,
		isLGBTQFriendly: false,
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		const updatedValue = type === "checkbox" ? checked : value;

		if (name in formData) {
			setFormData({
				...formData,
				[name]: updatedValue,
			});
		} else if (name in formData.location) {
			setFormData({
				...formData,
				location: {
					...formData.location,
					[name]: updatedValue,
				},
			});
		} else if (name in formData.details) {
			setFormData({
				...formData,
				details: {
					...formData.details,
					[name]: updatedValue,
				},
			});
		} else if (name in formData.features) {
			setFormData({
				...formData,
				features: {
					...formData.features,
					[name]: updatedValue,
				},
			});
		} else if (name in formData.owner) {
			setFormData({
				...formData,
				owner: {
					...formData.owner,
					[name]: updatedValue,
				},
			});
		} else {
			setFormData({
				...formData,
				[name]: updatedValue,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${url}product/addproduct`,
				formData
			);
			console.log(response?.data);
			alert(response?.data?.message);
			navigate(`/my-listing/${userId}`);

			// Handle success, show a message or redirect
		} catch (error) {
			alert("Property listing failed");
			console.error("Error submitting data:", error);
			// Handle error, show a message
		}
	};

	return (
		<div>
			<div className="flex flex-col w-full h-full bg-[#FFE5AD] p-8 lg:p-16">
				<h2 className="text-[#982176] font-bold text-2xl text-center mb-5">
					Property Details
				</h2>
				<form id="form-list" onSubmit={handleSubmit}>
					<label htmlFor="property-title" className="mb-1 font-bold">
						Title
					</label>
					<input
						type="text"
						id="property-title"
						name="title"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.title}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="property-address"
						className="mb-1 font-bold"
					>
						Property Address
					</label>
					<textarea
						id="property-address"
						name="address"
						rows="2"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.location.address}
						onChange={handleChange}
						required
					></textarea>

					<label htmlFor="property-city" className="mb-1 font-bold">
						City
					</label>
					<input
						type="text"
						id="property-city"
						name="city"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.location.city}
						onChange={handleChange}
						required
					/>

					<label htmlFor="property-state" className="mb-1 font-bold">
						State
					</label>
					<input
						type="text"
						id="property-state"
						name="state"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.location.state}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="property-description"
						className="mb-1 font-bold"
					>
						Description
					</label>
					<textarea
						id="property-description"
						name="description"
						rows="4"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.description}
						onChange={handleChange}
						required
					></textarea>

					<label htmlFor="property-price" className="mb-1 font-bold">
						Price
					</label>
					<input
						type="number"
						id="property-price"
						name="price"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.price}
						onChange={handleChange}
						required
					/>

					<label htmlFor="property-image" className="mb-1 font-bold">
						Image
					</label>
					<input
						type="text"
						id="property-image"
						name="image"
						value={formData.image}
						// accept="image/*"
						placeholder="enter link of image"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="property-category"
						className="mb-1 font-bold"
					>
						Category
					</label>
					<select
						id="property-category"
						name="category"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.category}
						onChange={handleChange}
						required
					>
						<option value="" disabled>
							Select category
						</option>
						<option value="Rental">Rental</option>
						<option value="Roommate">Roommate</option>
						<option value="PG">PG</option>
					</select>

					<label htmlFor="property-beds" className="mb-1 font-bold">
						Beds
					</label>
					<input
						type="number"
						id="property-beds"
						name="beds"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.beds}
						onChange={handleChange}
						required
					/>

					<label htmlFor="property-baths" className="mb-1 font-bold">
						Baths
					</label>
					<input
						type="number"
						id="property-baths"
						name="baths"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.baths}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="property-balcony"
						className="mb-1 font-bold"
					>
						Balcony
					</label>
					<input
						type="number"
						id="property-balcony"
						name="balcony"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.balcony}
						onChange={handleChange}
					/>

					<label
						htmlFor="super-built-area"
						className="mb-1 font-bold"
					>
						Super Built Area
					</label>
					<input
						type="number"
						id="super-built-area"
						name="superBuiltArea"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.superBuiltArea}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="additional-rooms"
						className="mb-1 font-bold"
					>
						Additional Rooms
					</label>
					<input
						type="text"
						id="additional-rooms"
						name="additionalRooms"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.additionalRooms}
						onChange={handleChange}
					/>

					<label htmlFor="floor" className="mb-1 font-bold">
						Floor
					</label>
					<input
						type="number"
						id="floor"
						name="floor"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.floor}
						onChange={handleChange}
						required
					/>

					<label htmlFor="total-floors" className="mb-1 font-bold">
						Total Floors
					</label>
					<input
						type="number"
						id="total-floors"
						name="totalFloors"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.totalFloors}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="property-parking"
						className="mb-1 font-bold"
					>
						Parking
					</label>
					<input
						type="text"
						id="property-parking"
						name="parking"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.parking}
						onChange={handleChange}
						required
					/>

					<label htmlFor="furnished" className="mb-1 font-bold">
						Furnished
					</label>
					<select
						id="furnished"
						name="furnished"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.furnished}
						onChange={handleChange}
						required
					>
						<option value="" disabled>
							Select furnishing status
						</option>
						<option value="Fully Furnished">Fully Furnished</option>
						<option value="Semi Furnished">Semi Furnished</option>
						<option value="Unfurnished">Unfurnished</option>
					</select>

					<label htmlFor="maintenance" className="mb-1 font-bold">
						Maintenance
					</label>
					<input
						type="number"
						id="maintenance"
						name="maintenance"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.details.maintenance}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="age-of-construction"
						className="mb-1 font-bold"
					>
						Age of Construction
					</label>
					<input
						type="text"
						id="age-of-construction"
						name="ageOfConstruction"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.features.ageOfConstruction}
						onChange={handleChange}
						required
					/>

					<label htmlFor="facing" className="mb-1 font-bold">
						Facing
					</label>
					<input
						type="text"
						id="facing"
						name="facing"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.features.facing}
						onChange={handleChange}
						required
					/>

					<label htmlFor="status" className="mb-1 font-bold">
						Status
					</label>
					<input
						type="text"
						id="status"
						name="status"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.features.status}
						onChange={handleChange}
						required
					/>

					<label htmlFor="visitor-parking" className="mb-1 font-bold">
						Visitor Parking
					</label>
					<input
						type="checkbox"
						id="visitor-parking"
						name="visitorParking"
						className="mb-4"
						checked={formData.features.visitorParking}
						onChange={handleChange}
					/>

					<label htmlFor="park" className="mb-1 font-bold">
						Park
					</label>
					<input
						type="checkbox"
						id="park"
						name="park"
						className="mb-4"
						checked={formData.features.park}
						onChange={handleChange}
					/>

					<label htmlFor="water-storage" className="mb-1 font-bold">
						Water Storage
					</label>
					<input
						type="checkbox"
						id="water-storage"
						name="waterStorage"
						className="mb-4"
						checked={formData.features.waterStorage}
						onChange={handleChange}
					/>

					<label
						htmlFor="friendly-neighborhood"
						className="mb-1 font-bold"
					>
						Friendly Neighborhood
					</label>
					<input
						type="checkbox"
						id="friendly-neighborhood"
						name="friendlyNeighborhood"
						className="mb-4"
						checked={formData.features.friendlyNeighborhood}
						onChange={handleChange}
					/>

					<label htmlFor="owner-name" className="mb-1 font-bold">
						<br />
						Owner's Name
					</label>
					<input
						type="text"
						id="owner-name"
						name="name"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.owner.name}
						onChange={handleChange}
						required
					/>

					<label htmlFor="owner-contact" className="mb-1 font-bold">
						Owner's Contact
					</label>
					<input
						type="text"
						id="owner-contact"
						name="contact"
						className="w-full p-2 mb-2 border border-gray-300 rounded"
						value={formData.owner.contact}
						onChange={handleChange}
						required
					/>

					<label
						htmlFor="is-lgbtq-friendly"
						className="mb-1 font-bold"
					>
						LGBTQ Friendly
					</label>
					<input
						type="checkbox"
						id="is-lgbtq-friendly"
						name="isLGBTQFriendly"
						className="mb-4"
						checked={formData.isLGBTQFriendly}
						onChange={handleChange}
					/>

					<div className="flex justify-between">
						<button
							type="button"
							onClick={navigate("/")}
							className="bg-[#982176] text-[#FFE5AD] p-2 rounded cursor-pointer text-lg hover:bg-[#f597db]"
						>
							Back
						</button>
						<button
							type="submit"
							className="bg-[#982176] text-[#FFE5AD] p-2 rounded cursor-pointer text-lg hover:bg-[#f597db]"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddListing;
