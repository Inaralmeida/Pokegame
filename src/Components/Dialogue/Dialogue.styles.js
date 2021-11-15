import styled from "styled-components";
import bgHome1 from "../../Assets/img/bg-home-1.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgHome1});
  background-position: center;
  > div {
    width: 40%;
    height: 400px;
    background-color: ${(p) => p.theme.colors.shadowLight};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 15px;
    padding: 20px;
    font-family: ${(p) => p.theme.fonts.subTitle};
    line-height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    > p {
      width: 70%;
    }

    > .inputName {
      width: 70%;
      height: 50px;
      border-radius: 10px;
      border: none;
      padding-left: 15px;
      font-family: ${(p) => p.theme.fonts.subTitle};
    }

    > .btn-next {
      min-width: 100px;
      padding: 10px;
      height: 40px;
      background: ${(p) => p.theme.colors.primaryLight};
      box-shadow: 5px 6px 11px ${(p) => p.theme.colors.shadowLight};
      border-radius: 5px;
      font-family: ${(p) => p.theme.fonts.subTitle};
      color: ${(p) => p.theme.colors.textLight};
      font-size: 15px;
      text-align: center;
      border: none;
      transition: all 0.7s;
      :hover {
        background-color: ${(p) => p.theme.colors.primaryDark};
      }
    }
  }
`;
