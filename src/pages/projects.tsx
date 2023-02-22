import Layout from "@/components/Layout";
import Head from "next/head";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config/index";
import ProjectItem from "@/components/projects/ProjectItem";

interface ProjectsProps {
  // length 때문에 'projects' 변수가 배열인지 확인한 다음 길이 속성에 액세스할 수 있는지 확인해야해서 추가한 타입 선언
  projects: Project[];
}

export default function projects({ projects }: ProjectsProps) {
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
          총 프로젝트 :<span className="pl-4 text-blue-500">{projects.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
    data: {
      page_size: 100,
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
    },
  };

  const response = await axios.request(options);
  const projects = response.data.results;

  return {
    props: { projects },
    revalidate: 1,
  };
}
