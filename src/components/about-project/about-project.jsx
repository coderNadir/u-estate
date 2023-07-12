import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './about-project.css';

import { Parallax, Pagination, Navigation } from 'swiper/modules';

export function AboutProject() {
	return (
		<section className="mt-44 h-[70vh] px-4 md:px-24 md:mt-64">
			<h2 className="capitalize text-center text-4xl font-semibold text-main mb-8 md:text-6xl md:mb-16">
				about the project
			</h2>
			{/* swiper */}
			<div className="">
				<Swiper
					style={{
						'--swiper-navigation-color': '#0ca678',
						'--swiper-pagination-color': '#0ca678',
					}}
					speed={600}
					parallax={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Parallax, Pagination, Navigation]}
					className="mySwiper bg-main"
				>
					<div
						slot="container-start"
						className="parallax-bg"
						// style={{
						// 	backgroundImage:
						// 		'url(https://swiperjs.com/demos/images/nature-1.jpg)',
						// }}
						data-swiper-parallax="-23%"
					></div>
					<SwiperSlide>
						<div
							className="title text-tint md:text-clip"
							data-swiper-parallax="-300"
						>
							Tower on Creek Island
						</div>
						<div className="text" data-swiper-parallax="-100">
							<p className="text-txt-main ">
								Creek Waters is a residential tower in the
								walkable Dubai Creek Harbour. The elegant design
								of the towers is inspired by the mesmerizing
								views of Dubai Creek and the culture and modern
								history of Dubai. Combining contemporary
								architecture and innovative landscape design,
								the white-paneled glass facades add a touch of
								glamor and character to Creek Island's diverse
								architectural styles.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							className="title text-2xl text-tint"
							data-swiper-parallax="-300"
						>
							20 minutes from the city center
						</div>
						<div className="text" data-swiper-parallax="-100">
							<p className="text-txt-main">
								Dubai Creek Harbor is a coastal area in the
								center of Dubai, inside which is the Ras Al Khor
								Wildlife Sanctuary, famous for its pink
								flamingos, parks and open spaces, and a
								transport system connecting different parts of
								the area. From the district, you can drive to
								Dubai Mall in about 20 minutes, 30 minutes to
								Palm Jumeirah and Burj Al Arab, and 35 minutes
								to The Walk JBR. It takes 23 minutes to drive to
								Dubai International Airport and about 50 minutes
								to the new Al Maktoum International Airport.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							className="title text-2xl text-tint"
							data-swiper-parallax="-300"
						>
							The second center of Dubai
						</div>
						<div className="text" data-swiper-parallax="-100">
							<p className="text-txt-main">
								Dubai's urban infrastructure and population are
								growing day by day, and very soon Dubai Creek
								Harbor will become a new home for 200,000
								residents. There will be an artificial island, a
								beach, a marina and the tallest modern
								skyscraper. Dubai Creek Harbor is close to key
								points in the city. Dubai Downtown can be
								reached by car, taxi or yacht in 10 minutes, and
								when you fly back to Dubai, you can drive home
								only in 15 minutes.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
