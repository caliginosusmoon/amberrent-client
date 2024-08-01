import React from "react";
import rectangle32 from "../assets/rectangle32.png";
import rectangle33 from "../assets/rectangle33.png";
import rectangle34 from "../assets/rectangle34.png";
import fingerprintimg from "../assets/fingerprintimg.png";
import infinite from "../assets/infinite.png";
import leaf from "../assets/leaf.png";

function WhyChooseUs() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex flex-row items-center gap-4 text-[#3E001F] py-10">
				<hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
				<span className="font-extrabold text-2xl whitespace-nowrap">
					{" "}
					Why Choose Us
				</span>
				<hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			</div>

			<div className="bg-[#FFE5AD] flex flex-row items-center justify-center gap-2 w-full overflow-hidden">
				<img src={rectangle32} width={480} height={480} />
				<img src={rectangle33} width={480} height={480} />
				<img src={rectangle34} width={480} height={480} />
			</div>

			<div className="bg-white shadow-2xl flex flex-row items-center justify-center gap-2 py-10">
				<div className="flex flex-col gap-4 items-center text-center bg-white shadow-2xl w-[480px]">
					<img src={leaf} width={30} height={30} className="py-4" />
					<p className="font-extrabold text-sm pb-4">
						1000+
						<br />
						LGBTQ+ Friendly
						<br />
						Living Spaces
					</p>
				</div>

				<div className="flex flex-col gap-4 items-center text-center bg-white shadow-2xl w-[480px]">
					<img
						src={infinite}
						width={30}
						height={30}
						className="py-4"
					/>
					<p className="font-extrabold text-sm pb-4">
						Inclusive Homes
						<br />
						for
						<br />
						Every Identity
					</p>
				</div>

				<div className="flex flex-col gap-4 items-center text-center bg-white shadow-2xl w-[480px]">
					<img
						src={fingerprintimg}
						width={30}
						height={0}
						className="py-4"
					/>
					<p className="font-extrabold text-sm pb-4">
						Building Trust
						<br />
						with Real Time
						<br />
						Analysis
					</p>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
