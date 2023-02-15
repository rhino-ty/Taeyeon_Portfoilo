import Head from "next/head";
import Layout from "../components/Layout";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>개발자 윤태연의 포트폴리오 웹사이트</title>
        <meta name="description" content="개발에 재미를 찾은 개발자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`${inter.className} text-3xl font-bold underline`}>
        윤태연
        <br /> 웹 개발 포트폴리오
      </h1>
    </Layout>
  );
}
