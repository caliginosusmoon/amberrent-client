// App.js

import React from "react";
import ContactOwner from "./ContactOwner";
export default function Pc() {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<div >
			<h1 style={{ color: "green" }}>
				Product Card
			</h1>
			
			<button type="button" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleOpen}>
				Contact Owner
			</button>
			<ContactOwner isOpen={open} onClose={handleClose}></ContactOwner>
		</div>
	);
}
