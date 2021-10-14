import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {POST_BY_SLUG_QUERY,POSTS_SLUGS} from '../../src/queries/product-by-slug';
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";

export default function Post(props) {
	const { post } = props;

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
		
			<Layout>
							<h4 className="products-main-title text-2xl uppercase">{ post?.title }</h4>
                            
                            <span dangerouslySetInnerHTML={ {
									__html: post.content
								} }></span>
                            </Layout>				
	
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: POST_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            post: data?.post ,
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: POSTS_SLUGS
    })

    const pathsData = []

    data?.posts?.nodes && data?.posts?.nodes.map((post) => {
        if (!isEmpty(post?.id)) {
            pathsData.push({ params: { slug: post?.id } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
