import Link from "next/link";

export default function IndexContent() {
  return (
    <>
      <div className="lg:flex-grow lg:w-1/2 lg:pl-28 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          재미 없던 인생에 개발을 만나고 나의 성공 시대를 시작해보려고 합니다.
        </h1>
        <div className="mb-8 leading-relaxed">
          <h2 className="text-gray-900 text-lg title-font font-medium mt-4">
            <p>
              • React.js(Next.js), TS 기반으로 컴포넌트를 구현하고 디자인하며 API 통신 코드를 작성해
              서버와 연결 및 배포한 경험이 있습니다.
            </p>
            <br />
            <p>
              • 진로에 한계를 얻고 방황하던 차 아버지께 개발을 접하고 내가 생각한대로 기능 개발하는
              것에 매료돼 개발을 시작했습니다. 그러면서 과정과 문제 해결에 희열감을 느껴
              프로그래밍의 길을 선택하게 됐습니다.
            </p>
            <br />
            <p>
              • 이제는 클라이언트가 원하는 기능을 바로 구현하고, 시야를 넓혀 남들이 봐도 부끄럽지
              않게 로직을 짜는 개발자가 되는 것이 목표입니다.
            </p>
            <br />
            <p>
              • 저의 뇌는 가소성이 매우 높기 때문에 금방 잊습니다. 그래서 기록을 해 완벽하지 않은
              기억을 보충하며 재미를 되새김질 하고 있습니다. 또 다른 사람들도 되새김질하라고 제
              기억을 드리고 있습니다.
            </p>
          </h2>
        </div>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
    </>
  );
}
