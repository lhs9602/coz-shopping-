import Header from "Components/Header/Header.js";

export default {
    title: 'composed/Header', // 스토리 분류 및 컴포넌트 이름
    component: Header, // 테스트할 컴포넌트(Divider)
    parameters: {
      backgrounds: {
        default: { value: 'light' }, // 스토리의 배경색 설정
      },
    },
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  };


export const Headers={
    args:{
        primary:"COZ Shopping"
    }
}
