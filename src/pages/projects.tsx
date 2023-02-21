import Layout from "@/components/Layout";
import Head from "next/head";

export default function projects() {
  return (
    <Layout>
      <Head>
        <title>윤태연의 프로젝트</title>
        <meta name="description" content="윤태연의 프로젝트 리스트입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>프로젝트</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}
