<div align="center">
<h1>캡틴 판교 vue.js 완벽 가이드  </h1>
2022년 02월 03일 ~ 2022년 02월 08일
</div>

### 학습 내용
+ Vue Router 기본부터 실전
+ Axios를 이용한 API 호출 방법과 자바스크립트 비동기 처리
+ Vuex와 상태 관리에 대한 깊은 이해
+ Mixins와 High Order Component를 이용한 컴포넌트 재활용
+ 외부 라이브러리를 프로젝트에 결합하는 방법
+ 뷰 컴포넌트 Design Pattern

## Content
### [Vue CLI 2.x vs Vue CLI 3.x]
#### 1. 명령어
+ 2.x : vue init '프로젝트 템플릿 이름' '파일 위치'
+ 3.x : vue create '프로젝트 이름'
 
#### 2. 웹팩 설정 파일
+ 2.x : webpack.confing.js 존재 (노출 O)
+ 3.x : webpack을 위해 별도의 설정 필요 (노출 X)
    
#### 3. 프로젝트 구성
+ 2.x : 깃헙의 템플릿 다운로드, package.json의 설치된 내용을 npm install로 추가
+ 3.x : 플로그인 기반으로 기능 추가, node_modules 자동으로 추가
    
#### 4. ES6 이해도
 + 2.x : 필요 X
 + 3.x : 필요 O
 
### [Vue Router]
#### 설치
 ```bash
    $ npm install vue-router --save
 ```
#### 기본 설정
```js
/* src/router/index.js */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from "../views/MainView.vue" // custom path
   
Vue.use(VueRouter);
export const router = new VueRouter({ // router instance 생성
  routes: [
    {
      path: '/', // url 주소
      component: MainView, // url 주소로 갔을 때 표시될 Component (Page로 사용되는 Component)
    },
    // ... (같은 구조로 route 정보 추가)
  ]
});
```
```js
/* src/main.js */
import { router } from "./router/index.js"; // 반드시 { router }로 받는다. (이름 변경 X)

new Vue({
  render: h => h(App),
  router, // 추가
}).$mount('#app')
```
 
### [Axios를 이용한 API 호출]
#### 설치
```bash
  $ npm install axios --save
```
### [Vuex]
상태 관리 도구를 이용한 데이터 호출 방법
+ state : 여러 컴포넌트 간의 공유되는 data 속성
+ action : Server에서 API를 호출하고 결과 data를 mutation으로 commit
+ mutations : 인자로 받은 결과 data로 state 속성값 변경
+ getters : 상태값을 반환 (computed와 동일한 속성)

#### 설치
```bash
   $ npm install vuex
```
### [this]
#### 1. 브라우저 Window 객체를 가리키는 this
return: `Window {...}`
#### 2. 함수안의 this -> Window 객체
```js
function sum(a, b) { 
  console.log(this); // return: Window {...}
  return a + b;
}
```
#### 3. 인스턴스를 정의한 객체 자체를 가리키는 this
```js
function Vue(el) {
  console.log(this); // return: Vue {}
  this.el = el;
}
new Vue('#app');
```
#### 4. 비동기 처리에서의 this
```js
   created() {
     console.log('호출 전: ', this); // return: VueComponent { ... }
     axios.get('')
     .then(function(response) {
       console.log('호출 후: ', this); // return: undefined
       this.users = response.data;
     })
     .catch(function(error) {
     });
   }
```
 
### [비동기 처리]
특정 코드의 연산이 끝날 때까지 코드의 실행이 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성
#### Callback 
+ Callback - 특정 함수/기능이 종료되자마자 실행되는 함수
+ Callback 함수 - 함수를 인자로 전달하는 
```js
function fetchData() {
  var result = [];

  $ajax({
    url: 'URL_ADDRESS',
    success: function(data) {
      console.log('data 호출 결과', data); // 2.
      result = data;
      // 해당 위치에서 함수 결과 출력 
    }
  });

  console.log('함수 결과', result); // 1.
}
```
#### Promise
+ Promise -  효율적인 Callback 관리 및 직관적인 코드 구현을 위해 사용하는 비동기 처리 패턴
```js
 function callAjax() { // Promise 객체 반환
   return new Promise(function(resolve, reject) {
     $.ajax({
       url: 'URL_ADDRESS',
       success: function(data) {
         resolve(data); // resolve된 상태의 Promise가 .then으로 넘어간다.
       }
     });
   });
 }

 function fetchData() {
   var result = [];

   callAjax()
     .then(function(data) { // resolve된 data가 함수로 들어온다.
       console.log('데이터 호출 결과', data);
       result = data;
       console.log('함수 결과', result);
     });
 }
```
## Practice Project
### News
뉴스 정보를 주는 서비스(실습 프로젝트)

### ScreenShot
#### News
![vuejs_news_component](https://user-images.githubusercontent.com/42309919/104534724-2999fb00-5658-11eb-81fe-c90bb0ab5bf6.PNG)
![vuejs_news_vuex](https://user-images.githubusercontent.com/42309919/104534727-2a329180-5658-11eb-89a3-b1f8d47188f3.PNG)

#### User
![vuejs_user_component](https://user-images.githubusercontent.com/42309919/104534730-2acb2800-5658-11eb-8d36-27cc0ceb08fb.PNG)
![vuejs_user_vuex](https://user-images.githubusercontent.com/42309919/104534732-2acb2800-5658-11eb-96f6-e40ea08dfbe2.PNG)

#### Ask
![vuejs_ask_component](https://user-images.githubusercontent.com/42309919/104534733-2b63be80-5658-11eb-8e1f-6f6d67f812ee.PNG)
![vuejs_ask_vuex](https://user-images.githubusercontent.com/42309919/104534734-2b63be80-5658-11eb-8d82-6f0dd64c9d61.PNG)

#### Item
![vuejs_item_component](https://user-images.githubusercontent.com/42309919/104534735-2bfc5500-5658-11eb-87a5-3911ffe1e6b8.PNG)
![vuejs_item_vuex](https://user-images.githubusercontent.com/42309919/104534719-27d03780-5658-11eb-8981-cf9e3fe84aa2.PNG)

####Jobs
![vuejs_job_component](https://user-images.githubusercontent.com/42309919/104534721-29016480-5658-11eb-9ffb-c2e6a3b51a7b.PNG)
![vuejs_job_vuex](https://user-images.githubusercontent.com/42309919/104534723-2999fb00-5658-11eb-83ac-ed2f0f97ed15.PNG)

### Description
+ Axios를 이용하여 API 호출
+ 기능 별로 store을 모듈화하여 분리해서 관리
+ 동적 라우팅을 사용하여 user 정보 페이지로 이동
+ Vue Router Transition을 이용해 화면 전환시 효과 적용
+ Mixin으로 반복되는 로직 재활용
+ ESLint를 활용해 코드를 일관성 있게 작성
+ Prettier을 활용해 코드 스타일을 일관되게 유지
## Application Project
### [offco 업데이트](https://github.com/sujungYu/renew_offco_project)
단체 모임을 위한 sns 서비스 (응용 프로젝트)
### [3355](https://github.com/sujungYu/3355_project/tree/master/src)
동네 이웃 간에 스터디를 구하고 관리하는 서비스 (응용 프로젝트)
