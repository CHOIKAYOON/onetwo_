/**
 * @title : 페이지 공통 컴포넌트
 */

import Head from 'next/head';
import React from 'react';
import NavBar from './Navbar';
import Title from './Title';

import { PageWrapper } from '../style/pageStyle';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children, }) => {

  return (
    <PageWrapper>
      <Head>
        <title>{title} - 헛둘페이지</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <Title>{title}</Title>
        {children}
      </main>
    </PageWrapper>
  );
};
export default Page;