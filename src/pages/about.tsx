import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AboutMeImage from "../../public/AboutMePhoto.jpg";
import AboutContent from "../components/AboutContent";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>About 윤태연</title>
        <meta name="description" content="개발자 윤태연에 대해서" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="About me"
              className="object-cover object-center"
              quality={100}
              loading="lazy"
              src={AboutMeImage}
            />
          </div>
          <AboutContent />
        </div>
      </section>
    </Layout>
  );
}
