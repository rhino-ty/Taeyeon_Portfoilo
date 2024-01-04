import Layout from "@/components/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";
// import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config";
import ProjectItem from "../components/projects/ProjectItem";
import { Project, ProjectsArrProps } from "@/types/projectType";

export default function Projects({ projects }: ProjectsArrProps) {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    setProjectList(projects);
  }, [projects]);

  return (
    <Layout>
      <Head>
        <title>윤태연의 프로젝트</title>
        <meta name="description" content="윤태연의 프로젝트 리스트입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <h1 className="text-4xl sm:text-6xl">
          총 프로젝트 :
          {projectList ? <span className="pl-4 text-blue-500">{projectList.length}</span> : null}
        </h1>
        {projectList ? (
          <div className="grid grid-cols-1 gap-8 p-12 m-4 lg:grid-cols-2">
            {projectList.map((aProject) => (
              <ProjectItem key={aProject.id} aProject={aProject} />
            ))}
          </div>
        ) : null}
      </div>
    </Layout>
  );
}

// 각 요청 때마다 호출
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const data = await res.json();
  const projects = await data.results;

  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}

// 빌드타임에 호출, 근데 revalidate 옵션있어서 갱신도 된다! 이러면 괜찮음
// export async function getStaticProps() {
//   const options = {
//     method: "POST",
//     url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
//     headers: {
//       accept: "application/json",
//       "Notion-Version": "2022-02-22",
//       "content-type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     data: {
//       page_size: 100,
//       sorts: [
//         {
//           property: "이름",
//           direction: "ascending",
//         },
//       ],
//     },
//   };

//   const response = await axios.request(options);
//   const projects = response.data.results;

//   return {
//     props: { projects },
//     revalidate: 1,
//   };
// }
