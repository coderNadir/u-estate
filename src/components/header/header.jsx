import { useEffect, useRef, useState } from 'react';
import { Nav } from '../nav/nav';

export function Header() {
	const buttonsContainerRef = useRef(null);
	const headerRef = useRef(null);

	const [stickNav, setStickNav] = useState(false);
	const [isBTNsContainerScrolled, setIsBTNsContainerScrolled] =
		useState(false);

	// useEffect for nav show on scroll
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// reset to true if header is visible
				if (entry.target === headerRef.current) {
					console.log('😊 is Intersecting: ', entry.isIntersecting);
					setStickNav(!entry.isIntersecting);
				}
			});
		});
		// observe if header exists in the DOM
		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		// unobserve when the component destroyed
		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, []);

	// useEffect for buttons
	useEffect(() => {
		const btnsContainer = buttonsContainerRef.current;

		btnsContainer.addEventListener(
			'scroll',
			setIsBTNsContainerScrolled(true)
		);

		return btnsContainer.removeEventListener('scroll', () => {});
	}, []);

	return (
		<header ref={headerRef} className="w-full relative">
			{/* navigation bar */}
			<Nav stickNav={stickNav}></Nav>
			{/* main header details */}
			<div className="relative w-full px-2 md:w-11/12 md:m-auto">
				{/* background */}
				<div
					className="relative grid place-items-center w-full h-[60vh] bg-bottom bg-cover m-auto mt-8 rounded-tr-2xl rounded-tl-2xl md:h-[75vh] md:rounded-2xl"
					style={{
						backgroundImage: "URL('/images/bg-header.jpg')",
					}}
				>
					<div className="absolute bg-transparent top-0 left-8 md:left-12">
						<ion-icon
							name="bookmark"
							style={{
								fontSize: '32px',
								backgroundColor: 'transparent',
								color: '#F3F0EB',
							}}
						></ion-icon>
					</div>
				</div>
				{/* details */}
				<div className="relative grid gap-4 px-2 py-4 mb-4 rounded-br-2xl rounded-bl-2xl md:w-1/2 md:absolute md:bottom-6 md:left-20 md:bg-[rgba(249,250,250,0.6)] md:rounded-2xl md:px-6">
					<h1 className=" text-4xl text-main font-bold md:bg-transparent">
						Creek Waters
					</h1>
					<p className="text-[#868e96] text-lg font-semibold md:bg-transparent md:text-[#495057]">
						Apartments in Dubai Creek Harbour by Emaar Properties.
						Initial down payment of 10%
					</p>
					<div className="grid grid-cols-2 gap-2 md:bg-transparent">
						<div className="md:bg-transparent">
							<p className=" font-semibold md:bg-transparent">
								From
								<strong className="ml-2 text-[#3db893] bg-transparent md:text-[#0ca678]">
									70 M²
								</strong>
							</p>
							<p className="text-[#868e96] text-xs md:bg-transparent md:text-[#495057]">
								the area of the apartement
							</p>
						</div>
						<div className="md:bg-transparent">
							<p className=" font-semibold md:bg-transparent">
								From
								<strong className="ml-2 text-[#3db893] md:bg-transparent md:text-[#0ca678]">
									434 000 $
								</strong>
							</p>
							<p className="text-[#868e96] text-xs md:bg-transparent md:text-[#495057]">
								the price of the apartement
							</p>
						</div>
					</div>
				</div>
				{/* brochure component */}
				<div className="grid bg-main-bg gap-6 px-2 mt-6 md:w-1/4 md:absolute md:-bottom-28 md:right-20 md:rounded-2xl md:shadow-2xl md:py-4 md:px-6">
					<div className="bg-transparent md:absolute md:-top-24">
						<img
							src="/images/brochure-transparent.png"
							alt=""
							// style={{
							// 	shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
							// }}
							className="bg-transparent mx-auto md:w-3/4 md:m-auto md:animate-brochure animate-"
						/>
					</div>
					<h2 className="text-3xl font-bold text-[#3db893] md:mt-8 md:text-[#0ca678]">
						Presentation of the project
					</h2>
					<p className=" text-sm text-[#868e96] font-semibold">
						Inside is the local area, architecture, and
						infrastructure
					</p>
					<div className="grid gap-3 w-full">
						{/* buttons container */}
						<div
							ref={buttonsContainerRef}
							className="flex gap-2 px-4 overflow-x-scroll text-sm no-scrollbar md:flex-col"
							style={{
								scrollSnapType: `${
									!isBTNsContainerScrolled
										? 'x mandatory'
										: ''
								}`,
								scrollPaddingLeft: '0%',
							}}
						>
							{/* whatsApp button */}
							<button className="relative w-3/4 flex items-center justify-center flex-shrink-0 px-4 py-2 bg-[#60a95f] rounded-full md:w-full md:hover:scale-105 md:transition-all md:duration-300 md:shadow-lg">
								<span className="bg-transparent text-white">
									Receive in WhatsApp
								</span>
								<ion-icon
									name="logo-whatsapp"
									alt="WhatsApp icon"
									style={{
										color: 'white',
										fontSize: '16px',
										backgroundColor: 'transparent',
										position: 'absolute',
										right: '1rem',
									}}
								></ion-icon>
							</button>
							{/* Direct download button */}
							<button
								className="relative w-3/4 flex items-center justify-center flex-shrink-0 px-4 py-2 bg-[#f9fafa] rounded-full md:w-full md:hover:scale-105 md:transition-all md:duration-300 md:shadow-lg"
								style={{
									scrollSnapAlign: 'center',
								}}
							>
								<span className="bg-transparent text-[#0ca678]">
									Direct Download
								</span>
								<ion-icon
									name="cloud-download"
									style={{
										color: '#0ca678',
										fontSize: '16px',
										backgroundColor: 'transparent',
										position: 'absolute',
										right: '1rem',
									}}
								></ion-icon>
							</button>
							{/* Telegram button */}
							<button className="relative w-3/4 flex items-center justify-center flex-shrink-0 px-4 py-2 bg-[#229ED9] rounded-full md:w-full md:hover:scale-105 md:transition-all md:duration-300 md:shadow-lg">
								<span className="bg-transparent text-white">
									Receive in Telegram
								</span>
								<span className="bg-transparent absolute left-3 top-2 md:left-[85%]">
									<ion-icon
										name="navigate-circle"
										style={{
											color: 'white',
											fontSize: '20px',
											backgroundColor: 'transparent',
										}}
										// className="absolute left-1"
									></ion-icon>
								</span>
							</button>
						</div>
						<p className=" col-span-full text-center text-xs text-[#868e96] md:hidden">
							<span className="px-4">&larr;</span>
							You can scroll through
							<span className="px-4">&rarr;</span>
						</p>
					</div>
				</div>
			</div>
		</header>
	);
}
