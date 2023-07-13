import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './places-nearby.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const placesNearbyImages = [
	{
		path: '/images/nearby-1.png',
		name: 'Dubai Creek Square',
	},
	{
		path: '/images/nearby-2.png',
		name: 'Creek Marina',
	},
	{
		path: '/images/nearby-3.png',
		name: 'Ras Al Khor Nature Reserve',
	},
	{
		path: '/images/nearby-4.png',
		name: 'Creek Golf and Yacht Club',
	},
	{
		path: '/images/nearby-5.png',
		name: 'Beach Creek',
	},
	{
		path: '/images/nearby-6.png',
		name: 'Island Park',
	},
];

export function PlacesNearby() {
	return (
		<section className="flex flex-col gap-12 mt-32 mb-44 px-4 md:px-24 md:mt-64">
			<div className="flex flex-col gap-4">
				<h2 className="capitalize text-4xl font-semibold text-main md:text-6xl md:text-center">
					Places nearby
				</h2>
				<p className=" text-txt-main text-xl md:text-2xl md:text-center">
					Explore the Vibrant Surroundings
				</p>
			</div>
			{/* card swiper effect */}
			<div>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					{placesNearbyImages.map((data) => {
						return (
							<SwiperSlide className="swiper-slide-nearby">
								<div
									style={{
										backgroundImage: `url('${data.path}')`,
									}}
									className="h-full rounded-xl bg-cover bg-center "
								>
									<p className="w-2/3 mx-auto text-center text-tint text-sm px-2 py-1 opacity-70 bg-white rounded-2xl md:w-2/5">
										{data.name}
									</p>
								</div>
								{/* <img
									src={`${data.path}`}
									alt=""
									className='className="swiper-slide-nearb w-full h-auto bg-cover bg-center ring-1 ring-main "'
								/> */}
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
