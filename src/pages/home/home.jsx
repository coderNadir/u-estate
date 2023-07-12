import { AboutProject } from '../../components/about-project/about-project';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Infrastructure } from '../../components/infrastructure/infrastructure';
import { Location } from '../../components/location/location';
import { PaymentPlan } from '../../components/payment-plan/payment-plan';
import { PlacesNearby } from '../../components/places-nearby/places-nearby';

export function Home() {
	return (
		<>
			{/* header */}
			<Header></Header>
			{/* infrastructure */}
			<Infrastructure></Infrastructure>
			{/* about the project */}
			<AboutProject></AboutProject>
			{/* location  */}
			<Location></Location>
			{/* payment plan */}
			<PaymentPlan></PaymentPlan>
			{/* places nearby */}
			<PlacesNearby></PlacesNearby>
			{/* footer */}
			<Footer></Footer>
		</>
	);
}
