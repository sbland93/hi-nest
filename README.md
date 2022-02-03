## 강의

[https://nomadcoders.co/nestjs-fundamentals/lectures/1940](https://nomadcoders.co/nestjs-fundamentals/lectures/1940)

### Nest.js

```jsx
npm i -g @nestjs/cli
new new
```

Module, Controller, Service

Module은 하나의 서비스 단위로 볼 수 있음

Controller → Express의 라우터 같은 존재

URL을 가져오고 함수를 실행함

```jsx
@Get('/hello')
```

Nest.js는 Controller와 비즈니스 로직을 분리하고 싶어함.

- Controller는 단순히 URL을 가져오는 역할.
- 나머지 비즈니스 로직은 서비스로 감.

모델을 활용하도록 하는 Entity

nest.js에서는 status도 자동으로 잡아주고, Exception 정의들도 해놨음.

Dto를 사용하는 이유는

좀 더 코드를 간결하게 만들 수 있도록, NestJs가 쿼리에 대한 유효성을 검증할 수 있도록 함.

dependecy injection

Nest는 Express와 돌게 되어 있는데, Fastify라는 프레임워크와도 호환이 된다.

Express와 돌기 때문에 Express처럼 res.json등의 것들을 사용할 수 있는데, Fastify로 호환시킬때 문제가 생긴다. (좋은 Practice는 아니다)

Jest → jest는 자바스크립트 테스팅 프레임워크

Unit Test → Function 단위로 생각할 수 있음.

E2E Test - Like User Story → Click here → Something.

E2E Test에서는 app Creation 환경을 맞춰줘야 한다. ex. Transform 등
