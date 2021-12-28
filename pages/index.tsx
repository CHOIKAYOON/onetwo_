/**
 * @title : 메인페이지
 * @path : '/'
 */
import type { NextPage } from "next";

import { getProducts } from "../lib/products";

import ProductCard from "../components/ProductCard";
import Page from "../components/common/Page";

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  return (
    <Page title="내 푸드메이트는 어디에 있을까? 헛둘!">
      <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
};
export default HomePage;

// ** Description
// Next의 유니크한 기능으로 Pre-Render 패턴 getStaticProps, getServerSideProps가 주로 쓰인다.
