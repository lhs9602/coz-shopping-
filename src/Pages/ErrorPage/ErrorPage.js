import styled from 'styled-components';
import error from "Pages/ErrorPage/error.png";
// 에러 페이지 컨테이너
const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// 이미지 스타일
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

// 에러 페이지 컴포넌트
export default function ErrorPage(){
  return (
    <ErrorPageContainer>
      <Image src={error} alt="에러 이미지" />
    </ErrorPageContainer>
  );
};