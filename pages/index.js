/* eslint-disable react/prop-types */
import dynamic from 'next/dynamic'
//import BestSellers from "@/components/home/BestSellers";
// import Header from "@/components/home/Header";
// import Latests from "@/components/home/Latests";
// import MostViewed from "@/components/home/MostViewed";
// import Popular from "@/components/home/Popular";
// import DiscountedProduct from "@/components/home/DiscountedProduct";
import ShopLayout from "@/components/layouts/Shop";
import React from "react";
import * as API from '../services/api'
import Banner from "@/components/home/Banner";
import SmallBanner from "@/components/home/SmallBanner";
import HeaderSkeleton from '@/components/skeleton/home/HeaderSkeleton';
import CardSkeleton from '@/components/skeleton/home/CardSkeleton';
import MultiCardSkeleton from '@/components/skeleton/home/MultiCardSkeleton';



const Header = dynamic(() => import('@/components/home/Header'), {
  loading: () => <HeaderSkeleton />,
  ssr: false
});
const BestSellers = dynamic(() => import('@/components/home/BestSellers'), {
  loading: () => <CardSkeleton />,
  ssr: false
});
const Latests = dynamic(() => import('@/components/home/Latests'), {
  loading: () => <MultiCardSkeleton />,
  ssr: false
});
const MostViewed = dynamic(() => import('@/components/home/MostViewed'), {
  loading: () => <MultiCardSkeleton />,
  ssr: false
});
const Popular = dynamic(() => import('@/components/home/Popular'), {
  loading: () => <CardSkeleton />,
  ssr: false
});

const DiscountedProduct = dynamic(() => import('@/components/home/DiscountedProduct'), {
  loading: () => <MultiCardSkeleton />,
  ssr: false
});

export default function Home(props) {
  return (
    <div>
      <ShopLayout title="فروشگاه">
        <Header products={props.popular} />
        <BestSellers products={props.best_sellers} />
        <Banner />
        <MostViewed products={props.most_viewed} />
        <SmallBanner />
        <Latests products={props.latest} />
        <DiscountedProduct products={props.popular} />
        <Popular products={props.popular} />
      </ShopLayout>
    </div>
  );
}

export async function getStaticProps() {
  const result = await API.get('/home')


  return {
    props: {
      best_sellers: result.data.best_sellers,
      most_viewed: result.data.most_viewed,
      popular: result.data.popular,
      latest: result.data.latest
    },
    revalidate: 60,
  }
}

