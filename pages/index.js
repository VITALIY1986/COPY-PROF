import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import Post from "../src/components/Post";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import ParentProductBlock from "../src/components/products/PerentProducts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import Accordion from "../src/components/Accordion";

export default function Home (props) {
	
	const { products,  heroCarousel, posts, postsCategory,questionsAnswers} = props || {};

	return (
			<Layout>
				{/*Hero Carousel*/}
				<HeroCarousel heroCarousel={heroCarousel}/>
				{/*Categories
				<div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
					<h2 className="main-title text-3xl text-center mb-5 uppercase"><span className="main-title-inner">Categories</span></h2>
					<ParentCategoriesBlock productCategories={ productCategories }/>
				</div>*/ }
			<div className="px-4">
				<div className="products container mx-auto my-32  ">
				<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
				<div className="flex flex-col bg-white m-auto p-auto">
		
			  <div
				className="flex overflow-x-scroll pb-10 hide-scroll-bar"
			  >
				<div
				  className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
				>
				{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
								</div>
			  </div>
		</div>
			</div>
					{/*Post
					<div className="products container mx-auto my-32 px-4 ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">{postsCategory?.name}</span></h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ posts.length ? (
							posts.map( post => <Post key={ post.id } post={ post }/> )
						) : '' }
					</div>
				</div>*/ }
					{/*Star*/ }
			
				
					<ParentProductBlock products={ products }/>
				{/*Products*/ }
				<div className="products container mx-auto my-32  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Акции</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ products.length ? (
							products.map( product => <Product key={ product.id } product={ product }/> )
						) : '' }
					</div>
				</div>
				{/*Products*/ }
				<div className="products container mx-auto my-32  ">
					<h2 className="products-main-title main-title mb-5 text-3xl text-center uppercase"><span className="main-title-inner">Наши Марки</span></h2>
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
						{ products.length ? (
							products.map( product => <Product key={ product.id } product={ product }/> )
						) : '' }
					</div>
				</div>
				</div>
			</Layout>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
		questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			postsCategory: data?.category ? data.category : [],
			posts: data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
		},
		revalidate: 1
	}

};

