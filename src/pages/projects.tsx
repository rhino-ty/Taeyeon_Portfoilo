import Layout from "@/components/Layout";
import Head from "next/head";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config/index";

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

// 빌드타임에 호출, 근데 revalidate 옵션있어서 갱신도 된다! 이러면 괜찮음
export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-02-22",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: { page_size: 100 },
  };

  const response = await axios.request(options);
  console.log(response);

  return {
    props: {},
    revalidate: 1,
  };
}
