import Head from "next/head";
import Layout from "../components/Layout";
import IndexContent from "../components/IndexContent";
import Animaition from "../components/Animaion";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>개발자 윤태연의 포트폴리오 웹사이트</title>
        <meta name="description" content="개발에 재미를 찾은 개발자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-3/4 mb-10 md:mb-0">
            <Animaition lottieJson="main" width={600} height={450} />
          </div>
          <IndexContent />
        </div>
      </section>
    </Layout>
  );
}
