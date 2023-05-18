# fe-sprint-coz-shopping 솔로프로젝트



## 📝 소개
코드 스테이츠 프론트엔드 부트캠프에서 진행한 솔로 프로젝트입니다.

다음과 같은 내용을 작성할 수 있습니다.
- 프로젝트 소개
<br><br>
1.상품리스트들을 화면에 출력하는 웹 페이지입니다
<br><br>
2.메인 페이지,상품페이지,북마크페이지로 구성되어 있습니다.
<br><br>
3.각 상품 아이템들은 북마크 기능이 있어, 북마크에 클릭
<br><br>
4.상품페이지,북마크페이지에는 무한 스크롤이 구현되어 있습니다.
<br><br>
5.상품을 클릭시 모달창에 상품이미지가 함께 출력됩니다.
<br><br>
6.상품페이지,북마크페이지에 카테고리 필터 기능이 있어, 탭에 따라 각 상품리스트들이 바뀜
<br><br>

피그마 주소:https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&node-id=0-1&t=TondHnrQMCuVJ5PO-0

<br />

### 화면 구성
|화면 명|
|:---:|
|<img src="https://user-images.githubusercontent.com/80824750/208456048-acbf44a8-cd71-4132-b35a-500047adbe1c.gif" width="450"/>|
|화면에 대한 설명을 입력합니다.|


|화면 명|
|:---:|
|<img src="https://user-images.githubusercontent.com/80824750/208456234-fb5fe434-aa65-4d7a-b955-89098d5bbe0b.gif" width="450"/>|
|화면에 대한 설명을 입력합니다.|

<br />

## ⚙ 기술 스택
> skills 폴더에 있는 아이콘을 이용할 수 있습니다.
### Front-end
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/JavaScript.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/React.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Redux.png?raw=true" width="80">
</div>

### Tools
<div>
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Github.png?raw=true" width="80">
<img src="https://github.com/yewon-Noh/readme-template/blob/main/skills/Figma.png?raw=true" width="80">
  
  
</div>

<br />




## 🤔 기술적 이슈와 해결 과정
1.Map을 쓰면서 아이템 컴포넌트들이 리렌더링되지 않는 문제 발생.
-이전에 map을 쓰지 않고 개별로 사용시, 데이터의 bookmark속성이 바뀌면 자동으로 컴포넌트가 리렌더링 되었지만 map을 사용한 뒤로는 제한되었습니다.
-처음에는 useEffect에 deps에 데이터를 추가하려고 했지만, 한 컴포넌트의 데이터의 bookmark속성이 바뀌면 전체적으로 다시 리렌더링 되기에 원하는 상황이 아니었습니다. 
-그래서 각 아이템 컴포넌트에 bookmark를 따로 만들어 bookmark가 변경되면 해당 컴포넌트만 리렌더링되게 변경했습니다.
<br /><br />
2.무한스크롤시 footer의 위치 문제
-footer가 제대로 하단에 위치되지 않았습니다. 무한 스크롤 시 footer가 맨 처음 화면을 기준으로 아래에 위치하기에 무한스크롤로 화면의 높이가 추가되면 화면 중간에 위치하게 됩니다.
-해결법으로는 기존의 app에서 공통적으로 적용하던 footer를 개별 페이지에서 따로따로 달아주었고, 무한 스크롤의 마지막에 footer를 새로 렌더링하게 만들 었습니다. 



## 💁‍♂️ 프로젝트 팀원
|Frontend|
|:---:|
|[이호섭](https://github.com/lhs9602)|
