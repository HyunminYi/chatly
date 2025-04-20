### 코드
* JWT 토큰 인증을 통한 세션관리, 로그인 / 회원가입 기능
* AI/SDK (VERCEL)를 활용한 채팅 UI
* Zustand 를 사용한 전역 관리 
* Zod,react hook form 을  활용한 스키마 유효성 + 검증



### 트러블슈팅
### modal popup unmount 이후 다른 UI 요소 클릭 안되는 현상
[버그](https://github.com/radix-ui/primitives/issues/3445)
pointer-events 가 body 에 남게되는 radix 버그가 있다.
### 해결 
```tsx
  useEffect(() => {
    return () => {
      document.body.style.pointerEvents = 'auto';
    };
  }, []);
//DOM 을 직접적으로 수정하여 버그 임시 수정 (radix 수정할때까지)
```
곰곰히 생각해보니, 업데이트를 기다려야하는 상황에 추가적인코드가 좋으방향이아닌거같아서
다운그레이드함 1.0.9
