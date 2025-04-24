# 챗 GPT 컨셉의 인공지능 채팅 서비스 프론트엔드
> 프론트엔드 next.js 15, Typescript 로 개발한 Ai 기반 채팅 서비스입니다.


## 주요 기능
* **사용자 인증** : 회원가입,로그인,회원 검증, JWT 기반 세션 관리 작업
* **대화 관리** : 대화 목록과 대화 CRUD
* **AI chat** : ai SDK 를 이용, 여러 AI 모델 선택 및 대화
* 반응형 : 모바일, 웹 제공

## 기술 스택
* 프론트엔드 : next.js(14,15),react,typescript
* 스티일링 : tailwind, shadcnUI
* 상태관리 : zustand
* 검증 : zod
* 인증 : JWT
* API : tanstack Query & next server action
* 백엔드 : postgresql,drizzle orm with neon

## 폴더 구조 
```js
src/
├── app/
│   ├── actions/         # 서버 액션
│   │   ├── auth.ts
│   │   ├── conversation.ts
│   │   └── sessions.ts
│   ├── components/      # 컴포넌트 (도메인별 분리)
│   │   ├── auth/        # 인증
│   │   ├── chat/        # 채팅
│   │   ├── modal/       # 모달
│   │   └── ui/          # Shadcn
│   ├── hooks/           # 커스텀 훅
│   ├── store/           # 상태 관리
│   └── schemas/         # 유효성 검증 스키마
```

## 코드 하이라이트

### next 미들웨어 활용
<img src="https://i.imgur.com/wr5g5Uu.png" width="320" alt="코드 스크린샷" />

### TS 제네릭과 커스텀 훅 설계
+ zod 스키마를 이용하여 타입과 유효성 검증을 하였습니다.
<img src="https://i.imgur.com/0UOvmuk.png" width="320" alt="코드 스크린샷" />

### 스키마 설계
+ Zod 활용해서 타입 검증 스키마 설계, 분기에따라 에러메시지 제공
<img src="https://i.imgur.com/ONrPpeg.png" width="320" alt="코드 스크린샷" />

### 유저정보 모듈화
Tanstack Query를 이용하여 유저정보를 페칭,캐싱하여 zustand 에 전역 상태 저장.  
프로바이더를 통해 중앙화 하여, 로딩처리와 에러에따른 라우팅 처리.  
<img src="https://i.imgur.com/Bo8u79T.png" width="320" alt="코드 스크린샷" />  
<br/>
<img src="https://i.imgur.com/bCw6Vo6.png" width="320" alt="코드 스크린샷" />  
<img src="https://i.imgur.com/OoHPD7R.png" width="360" alt="코드 스크린샷" />
### UI 와 기능 분리
로직과 UI 분리하여 가독성을 높였음.  
모델이 선택되지 않았을 경우 토스트로 피드백  

<img src="https://i.imgur.com/SYaJwGf.png" width="320" alt="코드 스크린샷" />

### 메모이제이션
<img src="https://i.imgur.com/Fd2kC05.png" width="320" alt="코드 스크린샷" />

### 캡슐화  
불필요한 상태 로직을 컴포넌트마다 중복되지 않게 캡슐화하여 분리함.  
콜백 실행하기위해 cbopen cbclose 등 추가함.  
<img src="https://i.imgur.com/kEpz7CD.png" width="320" alt="코드 스크린샷" />

## 트러블 슈팅
> `[["auth","user"]]: No queryFn was passed as an option, and no default queryFn was found.`  
useQuery 훅을 사용시 , queryFn 이 누락된 에러가 지속적으로 호출  
해결 : 리액트쿼리 로직을 캡슐화하기 위해 커스텀 훅으로 변경함.  

> vercel deploy 시 지속적인 타입 에러  
해결 : next14 -> 15로 마이그레이션시 몇몇개 바뀐내용에 맞춰 수정함.  
서버 컴포넌트의 props를 바로 구조분해화 아닌, `{conversationId] = props.params` 와 같이 할당함  
cookies()의 변경으로 `c = await cookies()` 로 변경  
   
## 개선 계획
- 클라이언트에서 API 요청을 리액트쿼리로 대체하여 useMutation 을 적극적으로 활용
