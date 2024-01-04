# 파일/폴더 디렉토리 구조

기본적으로 [Next.JS 14의 App Router 버전](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)으로 관리하고 있다.

## /public

static한 파일을 넣는데 사용한다. 보통 image를 많이 넣는다. Next.JS의 [Image 컴포넌트와 결합](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)할 경우 더욱 편하다.

## /src

UI, 비즈니스 로직 등이 들어간 파일이다. 가장 핵심적인 코드들이 들어갔다고 해도 무방하다.<br/>

📦src<br/>
┣ 📂api<br/>
┃ ┗ 📜fetch-config.ts<br/>
┣ 📂app<br/>
┃ ┣ (...)<br/>
┃ ┣ 📜layout.tsx<br/>
┃ ┗ 📜page.tsx<br/>
┣ 📂components<br/>
┣ 📂constant<br/>
┣ 📂containers<br/>
┣ 📂layouts<br/>
┣ 📂mock<br/>
┣ 📂store<br/>
┣ 📂styles<br/>
┣ 📂types<br/>
┗ 📂utils<br/>

### /api

API 호출 코드를 `/src`와 `/api` 폴더로 분리하는 것은 코드 구조를 보다 모듈화하고 체계적으로 유지하며, 단일 책임 원칙을 지키고 테스트 용이성과 재사용성을 향상시키기 위해 따로 분리. 서버 URL을 직접적으로 쓰는 코드와 UI, 비즈니스 코드가 분리해 코드 구조가 더 모듈화가 되게끔 체계적으로 정리하고, 혹여나 모를 중복 코드를 제거하고, 추상화를 통해 재사용성도 늘릴 수 있어 분리하는 것을 선택했음.
<br/>
또한 Next.JS에선 따로 `/app` 안에서 사용해 [Next.JS만의 API 커스텀 방식](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)을 사용할 수 있는데, 여기에서는 API 코드 + React-Query를 사용하기 때문에 필요가 없어 `/src`와 분리해 사용하고 있음.
<br/>
`/api/fetch-config.ts`에서 선언된 `fetchWithAuth` 함수를 사용해 401 에러를 핸들링하고 있음

### /app

Next.JS만의 기능이다. 폴더를 만들고 그 안 파일 `page.tsx`로 URL 도메인을 짤 수 있음. [참고](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
<br/>
여기서는 URL Path에 직접적으로 영향을 주는 폴더 및 `page.tsx`와 공통적으로 컴포넌트를 짤 수 있는 `layout.tsx`만 존재하게 만들었다. 따로 CDD를 위해 컴포넌트를 분리하여 만든 `/containers` 및 `/component` 폴더나 레이아웃을 만드는 데 쓰일 `/layout` 폴더 등은 동일 위치의 디렉토리에 위치시켰음. 소괄호는 URL에 영향을 주지 않지만 레이아웃 등 [그룹핑이 필요](https://nextjs.org/docs/app/building-your-application/routing/route-groups)할 때 쓴 것임.
<br/>
`/api`와 마찬가지로 분리를 통해 폴더 구조를 체계적으로 관리하기 위해서 `/app`에는 페이지 구조를 짜는 파일만 두게 했음. 또한 SSR을 사용하기 때문에 `/app` 아래 `page.tsx`에는 `'use client'` 같은 지시어나 로직, UI 코드를 잘 사용하지 않고, Next.JS의 SSR 기능과 라우팅만 사용하는 곳으로 사용한다.

### /components

`/app`과 `/container`의 구성요소들을 `/components`에 정리했음. CDD 방식을 따르는 리액트의 프레임워크인 Next.JS이므로 Component들을 초기 개발을 진행하거나, 고도화를 위해 리팩토링을 진행할 때 Page를 렌더링하는 `/app`과 `/container` 분리해야하기 때문에 `/components`를 만들었음.

### /constants

변하지 않는 데이터를 다루는 코드를 작성하는 폴더이다. 보통 Category 객체 같은 것들이 쓰임.

### /containers

`page.tsx`에 가장 1번째로 들어가는 파일들이 들어간다. 위에서 기술했듯이 로직, UI 정보가 들어가는 최 앞단의 컴포넌트라고 보면 된다. 여기서부터 `'use client'` 지시어를 쓰면 된다.

### /layouts

말 그대로 레이아웃에 쓰일 컴포넌트들을 따로 두었다. Header, Sidebar 등을 구현해 작성하여 `/app`의 `layout.tsx`에 쓰일 코드들을 작성함.

### /mock

초기 개발 단계에서 쓰일 Mock Data들을 작성하는데 쓰임.

### /store

전역 상태를 작성하는데 쓰이며, 전역 상태 라이브러리의 Hooks, Status를 작성. 여기에서는 지금 Zustand를 쓰고 있음.

### /styles

CSS 코드를 작성하는데 쓰인다. 공통으로 적용될 `grobals.css`가 기본으로 있고, 컴포넌트나 페이지에 쓰일 로컬 CSS도 여기에 작성.

### /types

TypeScript를 쓰고 있으므로 type을 작성해야함.
<br/>
로컬에 작성하는 것보다 다른 폴더에 모아 작성하는 것을 통해 모듈화를 이뤄 체계적으로 정리하는 것이 편하고, 추상화와 중복 코드를 방지하기 위해 따로 분리함.

### /utils

`/utils`는 앱 전반에서 사용되는 작은 기능들을 추상화한 함수들이 있는 폴더. 재사용성이 매우 높은 코드이면서, 비즈니스 로직에 큰 영향을 주지 않는 헬퍼 함수 코드를 주로 사용하기 위해 따로 만들음.
<br/>
보통 인증 관련 함수나 Format 함수, Provider나 Debounce 등이 들어감.
