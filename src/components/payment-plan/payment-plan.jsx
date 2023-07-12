export function PaymentPlan() {
	return (
		<section className="mt-44 flex flex-col gap-16 px-4 py-12 md:px-24 md:mt-64 md:box-border">
			<div>
				<h2 className="mb-4 text-main text-4xl font-semibold capitalize animate-puff-in-horizontal md:text-6xl md:text-center">
					payment plan
				</h2>
				<p className="text-txt-main text-sm md:text-center">
					View available payment plan in Creek Waters with detailed
					calculation
				</p>
			</div>
			<div className="flex flex-col gap-6 md:flex-row md:w-4/5 md:m-auto">
				{/* plan 1 */}
				<div className="w-3/4 m-auto flex flex-col gap-6 px-4 py-6 bg-sec-bg shadow-lg rounded-lg md:hover:scale-105 md:transition-all">
					<div className="bg-inherit flex flex-col gap-8 px-4">
						{/* card header */}
						<div className="bg-inherit mb-6 text-center font-semibold">
							{/* number bedrooms */}
							<div className="m-auto px-2 my-4 bg-inherit uppercase text-center text-sm text-shade font-bold ring-1 rounded-full bg-main ring-tint w-3/4">
								1 bedroom
							</div>
							{/* main card header */}
							<div className="flex items-center justify-center bg-inherit text-3xl font-bold">
								<span className="bg-inherit text-txt-main text-lg italic uppercase">
									from
								</span>
								<span className="bg-inherit pl-2 text-main">
									47 000$
								</span>
							</div>
							{/* separator */}
							<div className=" h-[1px] mt-2 w-3/4 m-auto bg-main "></div>
						</div>

						{/* card details */}
						<div className="bg-inherit flex flex-col gap-6">
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[1px] border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									initial fee
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									47 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-2 border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									during construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									80%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									377 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[3px]  border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									completion of construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									47 000$
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* plan 2 */}
				<div className="w-3/4 m-auto flex flex-col gap-6 px-4 py-6 bg-sec-bg shadow-lg rounded-lg md:hover:scale-110 md:transition-all md:scale-105">
					<div className="bg-inherit flex flex-col gap-8 px-4">
						{/* card header */}
						<div className="bg-inherit mb-6 text-center font-semibold">
							{/* number bedrooms */}
							<div className="m-auto px-2 my-4 bg-inherit uppercase text-center text-sm text-shade font-bold ring-1 rounded-full bg-main ring-tint w-3/4">
								2 bedrooms
							</div>
							{/* main card header */}
							<div className="flex items-center justify-center bg-inherit text-3xl font-bold">
								<span className="bg-inherit text-txt-main text-lg italic uppercase">
									from
								</span>
								<span className="bg-inherit pl-2 text-main">
									634 000$
								</span>
							</div>
							{/* separator */}
							<div className=" h-[1px] mt-2 w-3/4 m-auto bg-main "></div>
						</div>

						{/* card details */}
						<div className="bg-inherit flex flex-col gap-6">
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[1px] border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									initial fee
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									63 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-2 border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									during construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									80%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									507 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[3px] border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									completion of construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									63 000$
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* plan 3 */}
				<div className="w-3/4 m-auto flex flex-col gap-6 px-4 py-6 bg-sec-bg shadow-lg rounded-lg md:hover:scale-105 md:transition-all">
					<div className="bg-inherit flex flex-col gap-8 px-4">
						{/* card header */}
						<div className="bg-inherit mb-6 text-center font-semibold">
							{/* number bedrooms */}
							<div className="m-auto px-2 my-4 bg-inherit uppercase text-center text-sm text-shade font-bold ring-1 rounded-full bg-main ring-tint w-3/4">
								3 bedrooms
							</div>
							{/* main card header */}
							<div className="flex items-center justify-center bg-inherit text-3xl font-bold">
								<span className="bg-inherit text-txt-main text-lg italic uppercase">
									from
								</span>
								<span className="bg-inherit pl-2 text-main">
									992 000$
								</span>
							</div>
							{/* separator */}
							<div className=" h-[1px] mt-2 w-3/4 m-auto bg-main "></div>
						</div>

						{/* card details */}
						<div className="bg-inherit flex flex-col gap-6">
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[1px] border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									initial fee
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									99 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-2 border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									during construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									80%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									793 000$
								</p>
							</div>
							<div className="bg-inherit grid grid-cols-3 gap-2 px-6 py-2 rounded-lg capitalize shadow-lg border-b-[3px] border-main">
								<p className="bg-inherit  col-span-full text-xs text-txt-main font-semibold">
									completion of construction
								</p>
								<p className="bg-inherit text-shade font-semibold ">
									10%
								</p>
								<p className="bg-inherit  place-self-end col-span-2 font-bold text-tint text-sm">
									99 000$
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
