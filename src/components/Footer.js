import {Facebook, Instagram, Twitter, Youtube} from "./icons";

const Footer = () => (
	<div className="footer bg-purple p-6 text-white">
		<div className="container mx-auto">
			<div className="md:grid  md:grid-cols-6 gap-4 ">
				<div className="col-start-1 col-end-4 ">
					<h3 className="mt-5 text-3xl">КОНТАКТЫ</h3>
					<div className="flex-none md:flex mt-5">
						<div className="flex-1" >
					     <p className="mb-3">Chantarelle</p>
					     <p className="mb-3">Norel</p>
					     <p className="mb-3">Dermaoxy</p>
						 </div>
						 <div className="flex-1">
					     <p className="mb-3">Arkana</p>
					     <p className="mb-3">Beyond Dental </p>
					     <p className="mb-3">Sittara</p>
						 </div>
					</div>
			    </div>
				<div className="col-start-4 col-end-6 ">
					<h3 className="mt-5 text-3xl">КОНТАКТЫ</h3>
					<div className="mt-5">
						<p>Mенеджер (Киев): +38 (097) 860 06 06 </p>
						<p>Mенеджер (Киев): +38 (068) 706 70 67 </p>
						<p>Mенеджер (регионы): +38 (097) 209 54 45</p>
						<p>Mенеджер (Beyond): +38 (067) 328-74-26</p>
						<p>г. Киев, пер. Западный 3ц</p>
						<p>info@4prof.com.ua</p>
					</div>
				</div>
				<div className="col-start-6 col-end-6">
				     <h3 className="mt-5 text-3xl">МЫ В СОЦ.СЕТЯХ</h3>
				     <ul className="social-links flex  mt-5">
				        <li><a href="https://www.facebook.com/4ProfUkraine" className="" target="_blank"><Facebook/></a></li>
				        <li className="ml-2 mt-1"><a href="#" target="_blank"><Twitter/></a></li>
				        <li className="ml-2 mt-1"><a href="https://www.youtube.com/channel/UC3BBKd1UUUtXMjY4uL_NZ4g" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				        <li className="ml-2"><a href="https://www.instagram.com/4profukraine/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			        </ul>
			   </div>
			</div>
			
		</div>
	</div>
);

export default Footer;
