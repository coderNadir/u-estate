export function Footer() {
	return (
		<footer className=" bg-main mt-44 px-4 py-6 rounded-tl-xl rounded-tr-xl md:px-24 md:mt-64">
			{/* Name */}
			<h2 className="bg-inherit text-white my-4 text-3xl text-center font-bold md:text-5xl md:mb-12">
				Creek Water
			</h2>
			{/* separator */}
			<div className="h-[1px] bg-main-bg w-full mb-6 "></div>

			{/* details */}
			<div className="bg-inherit grid md:grid-cols-2">
				{/* mail list subscriber */}
				<div className=" bg-sec-bg shadow-lg rounded-lg p-6 flex flex-col gap-2 md:w-2/3 md:m-auto">
					<h3 className="bg-inherit pl-2 text-main text-lg font-semibold">
						Subscribe to our newsletter to be notifed next launch.
					</h3>
					<p className="bg-inherit pl-2 text-txt-main text-sm mb-4">
						no spam, no third party.
					</p>
					<div className="bg-inherit flex flex-col gap-2 md:flex-row">
						<input
							className="bg-inherit w-full px-4 py-2 ring-[1px] text-main ring-tint rounded-full shadow-lg transition-all focus-visible:outline-main md:w-2/3"
							type="text"
							placeholder="email"
						/>
						<input
							className=" bg-main w-full px-4 py-2 text-white font-semibold  rounded-full shadow-lg ring-[1px] ring-main transition-all hover:bg-inherit hover:text-main hover:cursor-pointer md:w-1/3"
							type="button"
							value="subscribe"
						/>
					</div>
				</div>
				{/* quick links */}
				<div className="bg-inherit grid grid-cols-2 gap-2 my-8 px-4">
					<h3 className="bg-inherit col-span-full place-self-start text-2xl text-white text-bold mb-1 border-b">
						Quick links
					</h3>
					<ul className="bg-inherit text-white font-semibold flex flex-col gap-2">
						<li className="bg-inherit transition-all cursor-pointer">
							+971 4 321 456
						</li>
						<li className="bg-inherit transition-all cursor-pointer">
							WhatsApp
						</li>
						<li className="bg-inherit transition-all cursor-pointer">
							1 Sheikh Zayed Rd, The Greens, Dubai
						</li>
					</ul>
					<ul className="bg-inherit text-white font-semibold flex flex-col gap-2">
						<li className="bg-inherit transition-all cursor-pointer">
							Infrastructue
						</li>
						<li className="bg-inherit transition-all cursor-pointer">
							about project
						</li>
						<li className="bg-inherit transition-all cursor-pointer">
							Location
						</li>
					</ul>
				</div>
			</div>
			<p className="bg-inherit text-txt-sec text-sm text-center px-4 my-4">
				All information provided on this website is not a public offer.
			</p>
			{/* separator */}
			<div className="h-[1px] bg-main-bg w-full md:w-1/3 m-auto"></div>
		</footer>
	);
}
