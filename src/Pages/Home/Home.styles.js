import styled from "styled-components";
import bgHome from "../../Assets/img/bg-home.jpg";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgHome});
  background-position: center;
  background-size: cover;

  > div {
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    > img {
      width: 100%;
    }

    > button {
      width: 291px;
      height: 92px;
      background: ${(p) => p.theme.colors.primaryLight};
      box-shadow: 5px 6px 11px  ${(p) => p.theme.colors.shadowLight};
      border-radius: 15px;
      font-family: ${(p) => p.theme.fonts.subTitle};
      color: ${(p) => p.theme.colors.textLight};
      font-size: 40px;
      text-align: center;
      border: none;
      transition: all .7s;
      :hover{
          background-color: ${(p) => p.theme.colors.primaryDark};
      }
    }
  }
`;
