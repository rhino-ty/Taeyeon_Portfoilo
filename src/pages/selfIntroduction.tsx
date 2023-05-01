import Layout from "@/components/Layout";
import Head from "next/head";

export default function SelfIntroduction() {
  return (
    <Layout>
      <Head>
        <title>자기소개서</title>
        <meta name="description" content="개발에 재미를 찾은 개발자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center">
          <SelfIntroduction />
        </div>
      </section>
    </Layout>
  );
}
