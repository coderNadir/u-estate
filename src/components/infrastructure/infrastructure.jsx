import { useState } from 'react';

const tabsDescriptions = {
	terrace: `exquisite townhouses are complemented by a picturesquely designed rooftop terrace, spacious enough to create a serene retreat with breathtaking views of the bay, the iconic Dubai skyline.`,

	pool: `Creek Waters landscaping platform is enriched by amenities and areas for relaxation and playing. Residents can enjoy the sparkling infinity pool merging into the blue sky, and a children's pool is provided for younger residents.`,

	gym: `The fully equipped gym overlooks an outdoor yoga area and is a great addition to an active lifestyle.`,

	park: `Right on your doorstep, the well-maintained Creekside Park, with its many trees and plants, shaded paths and colorful design, runs parallel to the winding waterfront route.`,

	coast: `The island is home to a park, waterfront, marina for 81 yachts and residences with unparalleled views of Dubai and the Burj Khalifa.`,

	beach: `The area's waterfront was named Creek Beach. An artificial white sand beach, infinity pools and service from the Vida hotel chain create the atmosphere of a five-star resort just a step away from your home.`,
};

export function Infrastructure() {
	const [tabId, setTabId] = useState('terrace');
	const [tabDescription, setTabDescription] = useState(
		tabsDescriptions[tabId]
	);
	const [selectedTab, setSelectedTab] = useState(tabId);
	const [animateImg, setAnimateImg] = useState(true);

	const handleClick = (e) => {
		const dataSet = e.target.dataset['id'];
		console.log('li clicked');
		console.log(dataSet);

		setAnimateImg(!animateImg);
		setTabId(dataSet);
		setTabDescription(tabsDescriptions[dataSet]);
		setSelectedTab(dataSet);
	};

	return (
		<section className="mt-44 flex flex-col h-[70vh] gap-6 px-4 md:px-24 md:mt-64">
			<h2 className=" text-main text-4xl font-semibold capitalize animate-puff-in-horizontal md:text-6xl md:text-center">
				infrastructure
			</h2>
			<div className="grid gap-8 ">
				<ul className="flex flex-row gap-2 justify-around items-center uppercase text-txt-main text-xs md:text-base md:justify-center">
					<li
						onClick={handleClick}
						data-id="terrace"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'terrace'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						terrace
					</li>
					<li
						onClick={handleClick}
						data-id="pool"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'pool'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						pool
					</li>
					<li
						onClick={handleClick}
						data-id="gym"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'gym'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						gym
					</li>
					<li
						onClick={handleClick}
						data-id="park"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'park'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						park
					</li>
					<li
						onClick={handleClick}
						data-id="coast"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'coast'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						coast
					</li>
					<li
						onClick={handleClick}
						data-id="beach"
						className={`px-2 py-1 transition-all cursor-pointer ${
							selectedTab === 'beach'
								? 'font-semibold shadow-md rounded-full text-main'
								: 'opacity-40 '
						}`}
					>
						beach
					</li>
				</ul>
				<div className="bg-tint p-3 rounded-md">
					{/* tab infrastructure description */}
					<div className="bg-tint">
						<div className=" md:grid md:grid-cols-2 md:text-lg">
							{/* bg-image */}
							<div className="bg-tint overflow-hidden">
								<div
									style={{
										backgroundImage: `URL(/images/infra-${tabId}.jpg)`,
									}}
									className={`rounded-md bg-cover bg-center w-full h-52 animatecss ${
										animateImg !== true
											? 'animate-puff-in-vertical'
											: 'animate-puff-in-horizontal'
									} md:h-72`}
								></div>
							</div>
							{/* description */}
							<div className="px-4 py-6 text-white bg-tint md:px-8 md:py-12">
								<h3
									className={`mb-6 text-white text-2xl font-bold uppercase bg-tint ${
										animateImg !== true
											? 'animate-puff-in-vertical'
											: 'animate-puff-in-horizontal'
									}`}
								>
									{tabId}
								</h3>
								<p
									className={`bg-transparent text-xl ${
										animateImg !== true
											? 'animate-puff-in-vertical'
											: 'animate-puff-in-horizontal'
									}`}
								>
									{tabDescription}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
