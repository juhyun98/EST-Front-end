# Front-end

## Talewind css를 사용해 보자
공식 사이트 : https://tailwindcss.com/
<br>
<br>
CDN 방식과 CLI 방식이 있다.
<br><br>

### CDN 방식
HTML에 head부분에 <script>형식으로 들어간다.
<br>
간편하고 빠르지만 인터넷 연결이 없는 상태에서는 사용할 수 없다.
<br>
`<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`
<br><br>
### CLI 방식
Command Line Interface의 약자
<br>
터미널이나 프롬프트 환경이 해당된다.
<br>
VScode에서 사용하기 위해 node.js를 우선 설치해둔다.
<br><br>

### 1. **터미널 (ctrl + ~)**
<br>
`npm install tailwindcss @tailwindcss/cli`

<br><br>

### 2. **css파일** (파일명은 styles.css 로 만들었다)
<br>
`@import "tailwindcss";`

<br><br>

### 3. **터미널**
<br>
`npx @tailwindcss/cli -i ./styles.css -o ./output.css --watch`
<br>　　　　　　　　　　　　　파일명　　　　　생성되는 파일

<br><br>

여기까지 진행하면 output.css라는 파일이 만들어지고 자동완성 기능만 추가해주면 끝이다.
<br><br><br><br>

## 자동완성 기능
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
<br>
Ctrl + Shift + P → Open use setting (JSON)

해당 파일을 열어서 아래 코드를 넣어준다
<br>
`"editor.quickSuggestions": {"strings": true}`

<br>
Tailwind CSS 설치부터 자동완성까지 완료 됐다.
