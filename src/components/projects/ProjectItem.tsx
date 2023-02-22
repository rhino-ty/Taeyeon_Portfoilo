import Image from "next/image";

export default function ProjectItem({ data }: any) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const velog = data.properties.Velog.url;
  const description = data.properties.설명.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.작업일자.date.start;
  const end = data.properties.작업일자.date.end;

  return (
    <div className="project-card">
      {/* <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width={100}
        height={50}
        quality={100}
        loading="lazy"
      /> */}

      <div className="p-4 flex flex-col items-center">
        <h1 className="text-2xl font-medium">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <div>
          <a href={github} className="mr-4">
            깃허브 바로가기
          </a>
          <a href={velog}>블로그 보러가기</a>
        </div>
        <p className="my-1 ">
          작업기간 : {start} ~ {end}
        </p>
        <div className="flex mt-2">
          {tags.map((aTag: { id: string; name: string; color: string }) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
