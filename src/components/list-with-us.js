import React, { useState } from 'react';

const ListWithUs = () => {
    const [currentPage, setCurrentPage] = useState('page1');

    const showPage2 = () => {
        setCurrentPage('page2');
    };

    const showPage1 = () => {
        setCurrentPage('page1');
    };

    return (
        <div className="bg-[#f2a592] flex justify-center items-center h-screen m-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-[900px] max-h-[90vh] overflow-y-auto" id="form-container-list">
                <div id="page1" style={{ display: currentPage === 'page1' ? 'block' : 'none' }}>
                    <h2 className="text-[#f7945e] text-2xl text-center mb-5">Hello!</h2>
                    <form id="form-list">
                        <label htmlFor="firstName" className="mb-1 font-bold">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="lastName" className="mb-1 font-bold">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="email" className="mb-1 font-bold">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="password" className="mb-1 font-bold">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="phone" className="mb-1 font-bold">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="city" className="mb-1 font-bold">City</label>
                        <input type="text" id="city" name="city" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="state" className="mb-1 font-bold">State</label>
                        <input type="text" id="state" name="state" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="country" className="mb-1 font-bold">Country</label>
                        <input type="text" id="country" name="country" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="pincode" className="mb-1 font-bold">Pincode</label>
                        <input type="text" id="pincode" name="pincode" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="role" className="mb-1 font-bold">Role</label>
                        <select id="role" name="role" className="w-full p-2 mb-2 border border-gray-300 rounded" required>
                            <option value="" disabled selected>Select category</option>
                            <option value="Seeker">Seeker</option>
                            <option value="Provider">Provider</option>
                        </select>

                       <div className='flex flex-row items-center justify-center gap-4 my-4'>
                       <label htmlFor="isLGBTQFriendly" className=" font-bold">LGBTQ Friendly</label>
                        <input type="checkbox" id="isLGBTQFriendly" name="isLGBTQFriendly" className=""/>

                       </div>
                        <div className="flex justify-center items-center">
                            <button type="button" onClick={showPage2} className="bg-[#f7945e] text-white p-2 rounded cursor-pointer text-lg hover:bg-[#e6835c]">Next</button>
                        </div>
                    </form>
                </div>
                <div id="page2" style={{ display: currentPage === 'page2' ? 'block' : 'none' }}>
                    <h2 className="text-[#f7945e] text-2xl text-center mb-5">Property Details</h2>
                    <form id="form-list">
                        <label htmlFor="property-title" className="mb-1 font-bold">Title</label>
                        <input type="text" id="property-title" name="title" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-address" className="mb-1 font-bold">Property Address</label>
                        <textarea id="property-address" name="address" rows="2" className="w-full p-2 mb-2 border border-gray-300 rounded" required></textarea>

                        <label htmlFor="property-city" className="mb-1 font-bold">City</label>
                        <input type="text" id="property-city" name="city" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-state" className="mb-1 font-bold">State</label>
                        <input type="text" id="property-state" name="state" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-description" className="mb-1 font-bold">Description</label>
                        <textarea id="property-description" name="description" rows="4" className="w-full p-2 mb-2 border border-gray-300 rounded" required></textarea>

                        <label htmlFor="property-price" className="mb-1 font-bold">Price</label>
                        <input type="number" id="property-price" name="price" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-image" className="mb-1 font-bold">Image</label>
                        <input type="file" id="property-image" name="image" accept="image/*" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-category" className="mb-1 font-bold">Category</label>
                        <select id="property-category" name="category" className="w-full p-2 mb-2 border border-gray-300 rounded" required>
                            <option value="" disabled selected>Select category</option>
                            <option value="Rental">Rental</option>
                            <option value="Roomate">Roomate</option>
                            <option value="PG">PG</option>
                        </select>

                        <label htmlFor="property-beds" className="mb-1 font-bold">Beds</label>
                        <input type="number" id="property-beds" name="beds" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-baths" className="mb-1 font-bold">Baths</label>
                        <input type="number" id="property-baths" name="baths" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-balcony" className="mb-1 font-bold">Balcony</label>
                        <input type="number" id="property-balcony" name="balcony" defaultValue="0" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="super-built-area" className="mb-1 font-bold">Super Built Area</label>
                        <input type="number" id="super-built-area" name="superBuiltArea" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="additional-rooms" className="mb-1 font-bold">Additional Rooms</label>
                        <input type="text" id="additional-rooms" name="additionalRooms" className="w-full p-2 mb-2 border border-gray-300 rounded"/>

                        <label htmlFor="floor" className="mb-1 font-bold">Floor</label>
                        <input type="number" id="floor" name="floor" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="total-floors" className="mb-1 font-bold">Total Floors</label>
                        <input type="number" id="total-floors" name="totalFloors" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="property-parking" className="mb-1 font-bold">Parking</label>
                        <input type="text" id="property-parking" name="parking" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="furnished" className="mb-1 font-bold">Furnished</label>
                        <select id="furnished" name="furnished" className="w-full p-2 mb-2 border border-gray-300 rounded" required>
                            <option value="" disabled selected>Select furnishing status</option>
                            <option value="Fully Furnished">Fully Furnished</option>
                            <option value="Semi Furnished">Semi Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                        </select>

                        <label htmlFor="maintenance" className="mb-1 font-bold">Maintenance</label>
                        <input type="number" id="maintenance" name="maintenance" className="w-full p-2 mb-2 border border-gray-300 rounded" required />

                        <label htmlFor="age-of-construction" className="mb-1 font-bold">Age of Construction</label>
                        <input type="text" id="age-of-construction" name="ageOfConstruction" className="w-full p-2 mb-2 border border-gray-300 rounded" required />

                        <label htmlFor="facing" className="mb-1 font-bold">Facing</label>
                        <input type="text" id="facing" name="facing" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="status" className="mb-1 font-bold">Status</label>
                        <input type="text" id="status" name="status" className="w-full p-2 mb-2 border border-gray-300 rounded" required />

                        <label htmlFor="visitor-parking" className="mb-1 font-bold">Visitor Parking</label>
                        <input type="checkbox" id="visitor-parking" name="visitorParking" className="mb-4"/>

                        <label htmlFor="park" className="mb-1 font-bold">Park</label>
                        <input type="checkbox" id="park" name="park" className="mb-4"/>

                        <label htmlFor="water-storage" className="mb-1 font-bold">Water Storage</label>
                        <input type="checkbox" id="water-storage" name="waterStorage" className="mb-4"/>

                        <label htmlFor="friendly-neighborhood" className="mb-1 font-bold">Friendly Neighborhood</label>
                        <input type="checkbox" id="friendly-neighborhood" name="friendlyNeighborhood" className="mb-4"/>

                        <label htmlFor="owner-name" className="mb-1 font-bold">Owner's Name</label>
                        <input type="text" id="owner-name" name="ownerName" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="owner-contact" className="mb-1 font-bold">Owner's Contact</label>
                        <input type="text" id="owner-contact" name="ownerContact" className="w-full p-2 mb-2 border border-gray-300 rounded" required/>

                        <label htmlFor="is-lgbtq-friendly" className="mb-1 font-bold">LGBTQ Friendly</label>
                        <input type="checkbox" id="is-lgbtq-friendly" name="isLGBTQFriendly" className="mb-4"/>

                        <div className="flex justify-between">
                            <button type="button" onClick={showPage1} className="bg-[#f7945e] text-white p-2 rounded cursor-pointer text-lg hover:bg-[#e6835c]">Back</button>
                            <button type="submit" className="bg-[#f7945e] text-white p-2 rounded cursor-pointer text-lg hover:bg-[#e6835c]">Submit</button>
                        </div>
                    </form>
                </div>        
            </div>
        </div>
    );
};

export default ListWithUs;
