import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './places-nearby.css';

import { EffectCards } from 'swiper/modules';

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
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className="mySwiper swiper-nearby"
				>
					{placesNearbyImages.map((data) => {
						return (
							<SwiperSlide
								style={{
									backgroundImage: `url('${data.path}')`,
								}}
								className="swiper-slide-nearby w-full h-full bg-cover bg-center ring-1 ring-main "
							>
								<p className="text-center text-tint text-lg px-2 py-1 opacity-50 bg-white rounded-2xl">
									{data.name}
								</p>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
}
