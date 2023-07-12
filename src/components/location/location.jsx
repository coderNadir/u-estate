import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './location.css';

import { Icon } from 'leaflet';

const iconLocation = new Icon({
	iconUrl: '/icons/icon-location.svg',
	iconSize: [45, 45],
});

export function Location() {
	return (
		<section className="h-screen flex flex-col gap-12 mt-44 px-4 md:px-24">
			<div className="flex flex-col gap-4">
				<h2 className="text-main text-4xl font-semibold capitalize mb-8 animate-puff-in-horizontal md:mb-12 md:text-6xl md:text-center">
					Project location
				</h2>
				<p className=" text-txt-main text-xl md:text-2xl md:text-center">
					The Creek Waters project is located in Dubai Creek Harbur.
					Book a veiwing of the area.
				</p>
				<div className="grid gap-2 md:grid-cols-2 md:place-items-center">
					<div className="flex items-center gap-4">
						<ion-icon
							name="car-sport"
							style={{
								color: '#0ca678',
								fontSize: '18px',
							}}
						></ion-icon>
						<p className=" text-txt-sec italic">
							20 minutes to
							<strong className="text-main ml-2">
								Dubai Mall
							</strong>
						</p>
					</div>
					<div className="flex items-center gap-4">
						<ion-icon
							name="car-sport"
							style={{
								color: '#0ca678',
								fontSize: '18px',
							}}
						></ion-icon>
						<p className=" text-txt-sec italic">
							30 minutes to
							<strong className="text-main ml-2">
								Palm Jumeirah
							</strong>
						</p>
					</div>
				</div>
			</div>
			{/* map */}
			<div className="h-[50vh] ring-1 ring-black rounded-lg overflow-hidden">
				<MapContainer
					center={[25.209243414581533, 55.34742704236937]}
					zoom={12}
					scrollWheelZoom={false}
				>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker
						key={555}
						position={[25.209243414581533, 55.34742704236937]}
						// onClick={() => {
						// 	setActivePark(park);
						// }}
						shadowPane="true"
						icon={iconLocation}
					>
						<Popup className="bg-transparent"> Creek Waters</Popup>
					</Marker>
				</MapContainer>
			</div>
		</section>
	);
}
