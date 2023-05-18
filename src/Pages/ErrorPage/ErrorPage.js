
import { ErrorPageContainer, Image } from './ErrorPageStyles.css';
import error from "Pages/ErrorPage/error.png";

export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <Image src={error} alt="에러 이미지" />
    </ErrorPageContainer>
  );
}
