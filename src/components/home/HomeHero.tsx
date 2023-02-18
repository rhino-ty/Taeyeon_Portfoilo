import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomeHero() {
  return (
    <>
      <div className="lg:flex-grow lg:w-1/2 lg:pl-28 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요!&nbsp;
          <br className="hidden lg:inline-block" />
          개발에 재미와 목표를 찾은 개발자, 윤태연입니다.
        </h1>
        <div className="mb-8 leading-relaxed">
          <h2 className="text-gray-900 text-lg title-font font-medium mt-4">
            개발에 재미와 목표를 찾은 개발자
          </h2>
          <p>
            어릴 때부터 어떤 걸 만들고 남들에게 보여주고 받은 반응과 피드백을 재밌어하고 즐겼습니다.
            그러던 중 웹 개발을 알게 되고 제약없이 다수에게 서비스를 제공할 수 있는 것에 매료돼
            부트캠프에 들어갔습니다.
          </p>
          <p>
            부트캠프에서 배우며 제가 생각한 디자인, 기능들을 만들어서 뷰포트에 바로 띄울 수 있다는
            점에서 더욱 웹 개발이 좋아졌고, 이해한 웹 개발의 언어를 통해 자신만의 서비스 및 기능을
            구현하고 싶은 욕심이 생겼습니다.
          </p>
          <h2 className="text-gray-900 text-lg title-font font-medium mt-4">
            경험 기록 중시 개발자
          </h2>
          <p>
            경험을 중요하게 생각해 원래 메모하고 기록하는 것을 자주 해왔습니다. 개발도 마찬가지로
            경험이 중요하고, 복기를 통해 다음 문제의 해결 단서가 되기에 부트캠프에서 경험한 것들은
            전부 기록하였고, 프로젝트에서 작성글을 팀원에게 공유하고 해결한 적이 있습니다.
          </p>
          <h2 className="text-gray-900 text-lg title-font font-medium mt-4">
            모름을 알고 넓은 시야를 가지고 싶은 개발자
          </h2>
          <p>
            배움에는 끝이 없다고 어떤 일이든 끝까지 학습해야한다고 알고 있습니다. 또한 아는 만큼
            보인다고 모르는 것이든 틀린 것이든 안 순간 채우기 위해 노력해야합니다. 결국 개발에 대한
            시야는 넓어지고, 성장한다는 것을 알고 있습니다. 그렇기에 협업을 하며 상대보다 내가
            부족한 점에 대해 알고 타협하는 것이 아닌 배우고 성장하며 시야를 넓히고 싶습니다.
          </p>
          <p>
            그렇게 조금씩 시야를 넓혀가며 한걸음 씩 걸어가 개발에 대한 순수한 재미를 찾아가고
            있습니다.
          </p>
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
