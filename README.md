# 카드리스트 만들기

## 1. 주의 사항

```
a 태그는 너비와 높이를 줄 수 없다.
이유는 초기 값이 display: inline 이라서.
```

```
a 태그의 너비, 높이, 마진, 패딩 주려면
display: block 을 손으로 적어준다.
팁 display: flex 를 준다.
```

```
span 태그는 너비와 높이를 줄 수 없다.
이유는 초기 값이 display: inline 이라서.
```

```
span 태그의 너비, 높이, 마진, 패딩 주려면
display: block 을 손으로 적어준다.
팁 display: flex 를 준다.
```

## 2. 정말 중요한 내용

### 2.1. position 을 필수로 이해하셔야 해요.

#### 2.1.2. postion:fixed

```
웹 브라우저 기준으로 위치 고정
스크롤 되어도
화면이 넓어도
화면이 좁아도
화면이 짧아도
위치고정
```

- 주의사항

```
postion: fixed 하면 웹브라우저 기준이라서 화면에 보이는 내용의 레이아웃에서 높이가 반영이 안된다.
```

```
postion: fixed 하면 너비를 주셔야 합니다.
배경색도 주셔야 합니다.
웹브라우저 기준으로 left, top, bottom, right 도 설정
```

```
position:fixed 하시면 우선 전체너비를 기준이로 내용으로 구분해서 div 구성하시기를 추천합니다.
```

```
화면 즉, z-index 값을 많이 줍니다.
z-index: 999999999999
```

#### 2.1.3. postion:absolute

- fixed 와 똑 같다.
- 차이점은 body를 기준으로 한다.
- 반드시 원하는 css 에 relative 가 있으면 기준이 바뀐다.

#### 2.1.4. postion:relative

- absolute 의 기준을 세운다.
