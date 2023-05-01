import { useState } from "react";

export default function AboutContent() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("okko8522@naver.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
      <div className="flex flex-row items-center justify-start mb-10 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-md mr-5 hover:shadow-lg transition-shadow duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <h1 className="text-gray-900 text-2xl title-font font-medium">윤태연</h1>
        </div>
      </div>

      <div
        className="flex flex-row items-center justify-start mb-10 cursor-pointer"
        onClick={handleCopyClick}
      >
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-md mr-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 hover:text-gray-500 dark:hover:text-gray-400">
            okko8522@naver.com
          </h2>
        </div>
        {isCopied && <span className="text-red-400 ml-2">Copied!</span>}
      </div>

      <div className="flex flex-row items-center justify-start mb-10 ">
        <a
          href="https://github.com/rhino-ty"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center"
        >
          <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-md mr-5 hover:shadow-lg transition-shadow duration-300">
            <svg
              className="w-8 h-8"
              fill="rgb(99 102 241 / var(--tw-text-opacity))"
              viewBox="0 0 100 100"
              stroke="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 hover:text-gray-500 dark:hover:text-gray-400">
              rhino-ty
            </h2>
          </div>
        </a>
      </div>

      <div className="flex flex-row items-center justify-start mb-10 ">
        <a
          href="https://velog.io/@okko8522"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center"
        >
          <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-md mr-5 hover:shadow-lg transition-shadow duration-300">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 192 192"
              enable-background="new 0 0 28 28"
              xmlSpace="preserve"
              width="28"
            >
              <path
                id="Website"
                fill="rgb(99 102 241 / var(--tw-text-opacity))"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 hover:text-gray-500 dark:hover:text-gray-400">
              저돌적 윤뿔소
            </h2>
          </div>
        </a>
      </div>

      <div className="flex flex-row items-center justify-start mb-10 ">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-md mr-5 hover:shadow-lg transition-shadow duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">서울시 관악구</h2>
        </div>
      </div>
    </div>
  );
}
