import { useEffect, useRef, useState } from 'react';

export function Nav({ stickNav }) {
	const [isEnglish, setIsEnglish] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const iconRefWats = useRef(null);
	const iconRefCall = useRef(null);
	const navRefList = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			iconRefWats.current.classList.toggle('animatecss-tada');
			iconRefCall.current.classList.toggle('animatecss-tada');
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	function toggleLang() {
		console.log('toggle lang working');
		setIsEnglish(!isEnglish);
	}
	function toggleNav(currState) {
		setIsOpen((currState) => !currState);
	}

	return (
		<nav
			className={` p-4 w-full grid place-content-between animatecss md:m-auto ${
				stickNav === true
					? 'fixed md:bottom-0 md:right-0 bg-sec-bg shadow-xl rounded-lg z-[1100] animatecss-fadeInDown justify-center md:max-w-min md:animatecss-fadeInRight'
					: 'md:w-11/12 grid-cols-3 animatecss-fadeIn'
			}`}
		>
			{/* menu */}
			{isOpen && (
				<ion-icon
					name="close"
					alt="icon close nav"
					style={{ color: '#3db893', fontSize: '32px' }}
					class={`animatecss duration-700 animatecss-fadeIn z-10`}
					onClick={() => toggleNav(isOpen)}
				></ion-icon>
			)}

			{!isOpen && stickNav === false && (
				<ion-icon
					name="menu"
					alt="icon open nav"
					style={{ color: '#3db893', fontSize: '32px' }}
					class={`animatecss duration-700 animatecss-fadeIn z-10`}
					onClick={() => toggleNav(isOpen)}
				></ion-icon>
			)}

			{/* Language switcher */}
			{stickNav === false && (
				<div className="flex items-center gap-2 mr-4">
					<span className="text-xs font-semibold text-[#868e96]">
						EN
					</span>

					<div
						className="relative z-10 bg-[#f9fafa] w-10 h-5 self-center rounded-2xl box-border"
						onClick={toggleLang}
					>
						<span
							className={`duration-700 animatecss absolute mx-1 left-0 bg-transparent
					${isEnglish ? 'left-[0px]' : 'left-4'}`}
						>
							<ion-icon
								name="radio-button-on-outline"
								className=""
								style={{
									color: '#3db893',
									fontSize: '16px',
									background: 'transparent',
								}}
							></ion-icon>
						</span>
					</div>

					<span className="text-xs font-semibold text-[#868e96]">
						AR
					</span>
				</div>
			)}
			{/* CTA buttons */}
			<div
				className={`flex ${
					stickNav === false
						? 'place-self-end gap-8'
						: 'gap-16 md:gap-4 md:flex-co'
				}`}
			>
				<div className="flex items-center cursor-pointer">
					<ion-icon
						ref={iconRefWats}
						name="logo-whatsapp"
						alt="WhatsApp icon"
						style={{ color: '#3db893', fontSize: '32px' }}
						class="animatecss animatecss-delay-3s duration-300"
					></ion-icon>
					<span
						className={`md:flex ml-4 text-[#3db893] font-semibold ${
							stickNav === false ? 'hidden' : ''
						}`}
					>
						WhatsApp
					</span>
				</div>
				<div className="flex items-center cursor-pointer">
					<ion-icon
						ref={iconRefCall}
						name="call"
						alt="call icon"
						style={{ color: '#229ED9', fontSize: '32px' }}
						class="animatecss duration-300"
					></ion-icon>
					<span
						className={`md:flex ml-4 text-[#229ED9] font-semibold ${
							stickNav === false ? 'hidden' : ''
						}`}
					>
						Telegram
					</span>
				</div>
			</div>

			{/* dropdown menu */}
			{stickNav === false && (
				<ul
					ref={navRefList}
					className={`absolute animatecss top-14 grid gap-6 place-items-center bg-[rgba(249,250,250,0.8)] p-4 rounded-md w-full place-self-center col-span-full 
				${
					isOpen
						? 'translate-y-full animatecss-fadeInDown'
						: 'animatecss-fadeOutUp'
				} md:w-1/2`}
					// `}
				>
					<li className="bg-transparent text-[#495057]">Company</li>
					<li className="bg-transparent text-[#495057]">Developer</li>
					<li className="bg-transparent text-[#495057]">About</li>
				</ul>
			)}
		</nav>
	);
}
