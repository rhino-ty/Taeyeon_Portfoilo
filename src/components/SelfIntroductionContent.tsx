import Link from "next/link";

export default function SelfIntroductionContent() {
  return (
    <>
      <main className="lg:flex-grow lg:w-1/2  flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          개발과 구현에 재미와 흥미를 추구하는 프론트엔드 개발자
        </h1>

        <section className="mb-8 leading-relaxed">
          <h2 className="self-intro-header title-font">무엇이 재미있는지 아는 개발자</h2>
          <p className="self-intro-content">
            저는 재미를 추구하는 것이 성공과 롱런의 핵심이라고 생각합니다. 그러나 오랜 시간 동안
            재미를 찾지 못했던 제가 개발 분야를 접하고, 나만의 사고와 몰입을 바탕으로 개발하여
            결과물을 만드는 것이 재미있는 일이라는 것을 깨달았습니다.
          </p>
          <p className="self-intro-content">
            특히 프론트엔드 개발을 좋아하게 되었는데, 언제 어디서든 내가 생각한 작업물을 구현할 수
            있는 자유로움과 즉각적인 결과를 볼 수 있는 점이 큰 매력이었습니다.
          </p>
          <p className="self-intro-content">
            또한 커스텀 훅을 이용하여 기능 구현 중 발생한 문제를 해결하는 과정에서 며칠간 고민하고
            고생했지만, 문제를 해결하고 나서의 성취감과 재미를 느낀 경험이 있습니다. 이러한 경험이
            제 직업 선택에 큰 영향을 주었습니다.
          </p>
          <p className="self-intro-content">
            저는 당장 재미 없는 작업일지라도 그 과정에서 얻는 뿌듯함과 성취감의 재미, 그리고 문제를
            해결하는 과정에서 더 높은 차원의 재미를 아는 개발자가 되고싶습니다.
          </p>

          <h2 className="self-intro-header title-font">기록함으로써 생각을 정리하는 개발자</h2>
          <p className="self-intro-content">
            저는 보통 무엇을 하든 여러 번 시도하고 실패를 해야만 마음이 편해지고 실패를 통해 배우는
            사람입니다.
          </p>
          <p className="self-intro-content">
            하지만 이러한 개발자로서의 반복적인 행동은 구현에 걸리는 시간이 오래 걸리는 단점으로
            작용했습니다.
          </p>
          <p className="self-intro-content">
            그래서 개발을 하면서 깨달은 점이나 해결 방법 등을 매 순간 기록하여 나만의 생각 정리를
            시작하였습니다.
          </p>
          <p className="self-intro-content">
            이렇게 기록하면서 문제를 관찰하면 곰곰히 생각할 수 있어서 감정도 차분해지고, 기술
            블로그의 글에 나온 비슷한 문제를 발견하고 해결할 때도 있었습니다.
          </p>

          <h2 className="self-intro-header title-font">
            경험을 통해 시야를 넓히고 싶은 경험 중시 개발자
          </h2>
          <p className="self-intro-content">
            개발 중 어떤 행동이든 경험이 있을 것이고, 그 경험들을 소중히 여기며 끝까지 해보면 시야가
            넓어진다고 생각합니다. 시야가 넓다는 것은 많이 알고 있다는 뜻이며, 이는 경험을 많이
            해봤다는 것과도 같습니다.
          </p>
          <p className="self-intro-content">
            팀 프로젝트를 하며 팀원이 모르는 점에 대해서 알려주고, 해결했을 때 큰 뿌듯함을
            느꼈습니다.
          </p>
          <p className="self-intro-content">
            결국 저의 삽질 경험이 다른 개발자들에게 도움이 되어 개발 시간을 절약할 수 있었습니다.
          </p>
          <p className="self-intro-content">
            도움을 청하지 않더라도 적절한 도움을 제공하며, 다른 개발자들의 문제를 공감하고 해결책을
            제시할 수 있는 개발자가 되고 싶습니다.
          </p>

          <h2 className="self-intro-header title-font">강점을 알고 강점을 발전시키고픈 개발자 </h2>
          <p className="self-intro-content">
            <strong>문제 해결</strong> : 저는 문제를 해결하기 위해서 대안책을 여러 개 모색하고,
            각각의 장단점을 분석하여 적용해왔습니다. 이를 통해 문제 해결에 대한 재미와 몰입감을
            느꼈고, 이러한 경험을 바탕으로 새로운 문제가 발생했을 때 빠르게 대처할 수 있습니다. 예를
            들어, 팀 프로젝트에서 개발 중 펫칭 커스텀훅에 대해서 여러 가지 대안책으로 네트워크 호출
            코드 관리, Axios 관리 등의 방법을 제시하고 팀원들이랑 멘토와 함께 논의하여 적용한 결과,
            효과적으로 문제를 해결할 수 있었습니다.
          </p>
          <p className="self-intro-content">
            <strong>커뮤니케이션</strong> : 팀 프로젝트를 진행하면서 제가 가진 협업 능력을
            적극적으로 발휘하고 싶었고, 제가 이전에 참여했던 프로젝트에서도 팀원들과 의사소통을
            원활히 하며 협업을 즐겼습니다. 특히, 기획이나 막히는 문제 해결을 위해 대안책을 여러 개
            모색하고, 이를 팀원들과 함께 논의하며 해결해 나갔습니다. 또한 비직무 커뮤니케이션이나
            스몰토킹도 즐겼습니다. 이러한 경험을 토대로 입사하게 된다면 저만의 커뮤니케이션을 통해
            팀의 유대를 쌓아가고 싶습니다.
          </p>
          <p className="self-intro-content">
            <strong>학습</strong> : 새로운 것을 배우는 것을 좋아하여, 거리낌 없이 적극적으로 학습에
            참여합니다. 프로젝트에서 새로운 기술을 적용하고자 하면, 공식 문서를 살펴보고 스스로
            적용하고, 기록하는 등 끊임없이 학습하여 발전하는 것을 즐기고 있습니다. 이러한 노력이
            나의 시야를 넓히는데 큰 도움이 될 것이라고 생각합니다.
          </p>
        </section>
      </main>
    </>
  );
}
