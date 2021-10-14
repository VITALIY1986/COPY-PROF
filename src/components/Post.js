import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";

const Post = ( props ) => {
	const { post } = props;

	return (
		


					
				  <div className="inline-block px-3">
					<div
					  className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
					>
<Link href={ `/post/${ post?.id }`} >
		<a>
			<Image
				className="object-cover bg-gray-100"
				width="500"
				height="500"
				loading="lazy"
				sourceUrl={post?.featuredImage?.node.sourceUrl }
			/>
		</a>
	</Link>
	<div className="product-info">
		<h3 className="product-title mt-3 font-medium text-gray-800">
		{ post.title ? post.title : '' }
		</h3>
		</div>


					</div>
				  
				  </div>
				 
		
			);
		};
		
{/*		<div classNameName="product mb-5 text-center">


	<Link href={ `/post/${ post?.id }`} >
		<a>
			<Image
				classNameName="object-cover bg-gray-100"
				width="500"
				height="500"
				loading="lazy"
				sourceUrl={post?.featuredImage?.node.sourceUrl }
			/>
		</a>
	</Link>
	<div classNameName="product-info">
		<h3 classNameName="product-title mt-3 font-medium text-gray-800">
		{ post.title ? post.title : '' }
		</h3>
	<span classNameName="overflow" dangerouslySetInnerHTML={ {
									__html: post.excerpt,
								} }></span>
</div>
</div>*/}

export default Post;
