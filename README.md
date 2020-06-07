# Codeigniter4-ReactJs-WebPack

![1](https://user-images.githubusercontent.com/15817249/82941028-a47eaa80-9fd0-11ea-864d-6f35f6cd556b.jpg)

### 셋팅 및 빌드

- 최상위 디렉토리에서 : npm install

- 개발시 : npm run dev ( 또는 yarn dev )
- 배포시 : npm run build ( 또는 yarn build )

---

### React 개발 작업 위치

- react/app.js

### React 결과물 저장 위치

- public/dist

---

### ci 에 React 적용

- ci/app/Views/welcome_message.php

```html
<!-- Line Number : 11 -->
<link rel="stylesheet" type="text/css" href="/dist/style.css" />
```

```html
<!-- Line Number : 264 -->
<div id="app"></div>
```

```html
<!-- Line Number : 387  -->
<script src="/dist/main.js" charset="utf-8"></script>
```

---

### mistake

file name : package.json

```javascript
"scripts": {
 
  "dev": "./node_modules/.bin/webpack --config ./config/webpack.config.dev.js --watch --hot",
 
  "build": "./node_modules/.bin/webpack --config ./config/webpack.config.prod.js"
 
},
```


[![Everything Is ...](https://img.youtube.com/vi/i-MnRqNn0_g/0.jpg)](https://www.youtube.com/watch?v=i-MnRqNn0_g?t=0s "Alice is a fox")

