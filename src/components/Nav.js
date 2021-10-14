import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import { useState } from 'react';
import profilePic from '../../public/logo.png'
import Image from 'next/image'
const Nav = () => {

	const [ isMenuVisible, setMenuVisibility ] = useState(false);
	const [ isMenuChidrenVisibleArkana, setMenuChidrenVisibleArkana ] = useState(false);
	const [ isMenuChidrenVisibleNorel, setMenuChidrenVisibleNorel ] = useState(false); 
	const [activeIndex, setActiveIndex] = useState(2);
	const questionsAnswers = [
	
	  {
		id: 2,
		  title: "СHANTARELLE",
		linkhome:"/categori-chantarelle-home",
		linkprof:"categori-chantarelle-prof"
	  },
	  {
		id: 3,
		  title: "ARKANA",
		  linkhome:"/categori-arkana-home",
		  linkprof:"/categori-arkana-prof"
	  },
	  {
		id: 3,
		  title: "NOREL",
		  linkhome:"/categori-norel-home",
		  linkprof:"/categori-norel-prof"
	  },
	  {
		id: 3,
		  title: "MCCM",
		  linkhome:"/categori-mccm-home",
		  linkprof:"/categori-mccm-prof"
	  },
	  {
		id: 3,
		  title: "DermaOxy",
		  linkhome:"/categori-dermaoxy-home",
		  linkprof:"/categori-dermaoxy-prof"
	  }
	 
	
	];
	const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
		const showDescription = index === activeIndex ? "show-description" : "";
		const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
		const ariaExpanded = index === activeIndex ? "false" : "true";
		return (
			
			
					<li  key={item.id}
					aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={`faq__question-button ${fontWeightBold}`}
	
		onClick={() => {
			setActiveIndex(index);
		  }}>
					<a className="">
					{item.title	}
					</a>
					<ul id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={`faq__desc ${showDescription}`}>
						<li className="block">
							<Link href={item.linkhome	}>
								<a className="">
								 HOME 
								</a>
							</Link>
							<Link href={item.linkprof	}>
								<a className="">
								Prof 
								</a>
							</Link>
						</li>
						
						
					</ul>
					</li>
			
			
				
				
			
		
		);
	  });
	return (
		<nav className=" p-4">
			<div className="flex items-center justify-between flex-wrap container mx-auto">

				<div className="flex items-center flex-shrink-0 text-black mr-20 w-24">
					{/*<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
					<Link href="/">
					<Image  src={profilePic}  />
					</Link>
					<span className="font-semibold text-xl tracking-tight">
					<Link href="/">
					<a className=""></a>
					</Link>
					</span>
				</div>
				<>
		
	
			</>
				{/*Menu button*/}
				<div className="block lg:hidden">
				<input id="hamburger" className="hamburger" type="checkbox"/>
				<label className=" hamburger" for="hamburger">
		  <i></i>
		  <span>
			<span className="close">close</span>
			<span className="open">menu</span>
		  </span>
		</label>
		<section className="drawer-list bg-blue ">
		<ul className="">
		{renderedQuestionsAnswers}
		</ul>
			</section>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
					<ul className="text-sm font-medium uppercase lg:flex-grow lg:flex">
					<li onClick={() => setMenuChidrenVisibleNorel(! isMenuChidrenVisibleNorel)}>
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						СHANTARELLE
						</a>
						<ul className={`${ isMenuChidrenVisibleNorel ? 'block lg:fixed' : 'hidden' } `}>
							<li>
							    <Link href="/categori-chantarelle-home">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						             HOME
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href="/categori-chantarelle-prof">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						            Prof
						            </a>
					            </Link>
							</li>
							
						</ul>
						</li>
						<li onClick={() => setMenuChidrenVisibleArkana(! isMenuChidrenVisibleArkana)} >
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						ARKANA	
						</a>
						<ul className={`${ isMenuChidrenVisibleArkana ? 'block lg:fixed' : 'hidden' } `}>
							<li>
							    <Link href="/categori-arkana-home">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						             HOME
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href="/categori-arkana-prof">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						            Prof
						            </a>
					            </Link>
							</li>
							
						</ul>
						</li>
						<li onClick={() => setMenuChidrenVisibleArkana(! isMenuChidrenVisibleArkana)} >
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						NOREL	
						</a>
						<ul className={`${ isMenuChidrenVisibleArkana ? 'block lg:fixed' : 'hidden' } `}>
							<li>
							    <Link href="/categori-norel-home">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						             HOME
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href="/categori-norel-prof">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						            Prof
						            </a>
					            </Link>
							</li>
</ul>
						</li>
				
				
					
						<li onClick={() => setMenuChidrenVisibleArkana(! isMenuChidrenVisibleArkana)} >
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						MCCM	
						</a>
						<ul className={`${ isMenuChidrenVisibleArkana ? 'block lg:fixed' : 'hidden' } `}>
							<li>
							    <Link href="/categori-mccm-home">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						             HOME
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href="/categori-mccm-prof">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						            Prof
						            </a>
					            </Link>
							</li>



							
							
						</ul>
						</li>
						<li onClick={() => setMenuChidrenVisibleArkana(! isMenuChidrenVisibleArkana)} >
						<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						dermaoxy	
						</a>
						<ul className={`${ isMenuChidrenVisibleArkana ? 'block lg:fixed' : 'hidden' } `}>
							<li>
							    <Link href="/categori-dermaoxy-home">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						             HOME
						            </a>
					            </Link>
							</li>
							<li> 
								<Link href="/categori-dermaoxy-prof">
						            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						            Prof
						            </a>
					            </Link>
							</li>



							
							
						</ul>
						</li>
					
					</ul>
					
					<div className="text-sm font-medium">
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
							Profile
						</a>
						<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
						<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
							Wishlist
						</a>
						<CartIcon/>
					</div>
				</div>

			</div>
		</nav>
	)
};

export default Nav;
