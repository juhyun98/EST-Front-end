# Front-end

**Talewind css**를 사용해 보자
공식 사이트 : https://tailwindcss.com/
CDN 방식과 CLI 방식을 배웠다

**CDN 방식**
HTML <head>에 <script>형식으로 들어간다.
간편하고 빠르지만 인터넷 연결이 없는 상태에서는 사용할 수 없다.

**CLI 방식**
Command Line Interface의 약자
터미널이나 프롬프트 환경이 해당된다.
VScode에서 사용하기 위해 node.js를 우선 설치해둔다.

터미널 (ctrl + `)
`npm install tailwindcss @tailwindcss/cli`

css파일 (파일명은 styles.css 로 만들었다)
`@import "tailwindcss";`

터미널
`npx @tailwindcss/cli -i ./styles.css -o ./output.css --watch`
                                               파일명

여기까지 진행하면 output.css라는 파일이 만들어지고 자동완성 기능만 추가해주면 끝이다.

자동완성 기능은
tailwind.config.js 파일 생성

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

넣어 준다.

Ctrl + Shift + P → Open use setting (JSON)

해당 파일을 열어서 아래 코드를 넣어준다
`"editor.quickSuggestions": {"strings": true}`

Tailwind CSS 설치부터 자동완성까지 완료 됐다.