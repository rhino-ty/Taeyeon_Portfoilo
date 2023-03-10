import Image from "next/image";
import { useState } from "react";
import Lottie from "react-lottie-player";
import loading from "public/loading.json";

export default function ProjectItem({ data }: any) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const velog = data.properties.Velog.url;
  const URL = data.properties.URL.url;
  const description = data.properties.설명.rich_text[0].plain_text;
  // const charge = data.properties.담당.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.작업일자.date.start;
  const end = data.properties.작업일자.date.end;

  const calculatedPeriod = (start: string, end: string): number => {
    // parseInt로 string 변환
    if (!start || !end) {
      return 0;
    }

    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    const startDate = new Date(
      parseInt(startDateStringArray[0]),
      parseInt(startDateStringArray[1]) - 1,
      parseInt(startDateStringArray[2])
    );
    const endDate = new Date(
      parseInt(endDateStringArray[0]),
      parseInt(endDateStringArray[1]) - 1,
      parseInt(endDateStringArray[2])
    );

    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const handleImageError = () => {
    setIsImageLoaded(false);
  };

  return (
    <div className="project-card">
      <div className="relative w-full h-80 overflow-hidden">
        {!isImageLoaded && (
          <div className="flex items-center justify-center w-full h-full">
            <Lottie loop animationData={loading} play style={{ width: 200 }} />
          </div>
        )}
        <Image
          className="rounded-t-lg object-cover"
          src={imgSrc}
          alt="cover image"
          fill
          quality={100}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      <div className="p-4 flex flex-col ">
        <a href={`${URL}`}>
          <h1 className="text-2xl font-medium text-center">{title}</h1>
        </a>
        <h3 className="mt-4 text-xl text-center">{description}</h3>
        {/* <h3 className="mt-2 text-center">{charge}</h3> */}
        <div className="mt-2 text-center">
          <a href={github} target="_blank" rel="noreferrer" className="mr-6">
            깃허브 바로가기
          </a>
          <a href={velog} target="_blank" rel="noreferrer">
            블로그 보러가기
          </a>
        </div>
        <p className="my-1 text-center">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex mt-2 overflow-scroll scrollbar-hide">
          {tags.map((aTag: { id: string; name: string; color: string }) => (
            <h1 className="px-1 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={aTag.id}>
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
