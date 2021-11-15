import styled from "styled-components";
import bgPrincipais from "../../Assets/img/bg-principais.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgPrincipais});
  background-size: cover;
`;

export const Select = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5vh;

  > .CaixadeTexto {
    width: 50%;
    height: 15vh;
    line-height: 30px;
    background-color: ${(p) => p.theme.colors.shadowLight};
    margin: 15px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: ${(p) => p.theme.fonts.subTitle};
  }

  > section {
    width: 65%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    margin-top: 30vh;

    > .pokebola {
      width: 100px;
      height: 100px;
      filter: drop-shadow(-5px -5px 10px rgba(255, 255, 255, 0.25))
        drop-shadow(5px 5px 10px rgba(255, 255, 255, 0.6));
      cursor: pointer;
    }

    > .pokebola:nth-child(even) {
      margin-left: -55px;
    }
    /* > .pokebola:hover {
      -webkit-animation: pokebolaScale 0.5s forwards;
      animation: pokebolaScale 0.5s  forwards;
    } */

    > .bounce {
      animation: pokebolaBounce 0.8s  0s ease-in;
    }

    /* @keyframes pokebolaScale {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1.3);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1.3);

      }
    } */
  }
  @keyframes pokebolaBounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(150px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const PokeEscolhido = styled.div`
  width: 80%;
  height: 80vh;
  position: absolute;
  display: block;
  padding: 20px;
  border-radius: 15px;

  background-color: ${(p) => p.theme.colors.bgLight};

  animation: openModal 0.7s cubic-bezier(0.2, 1.254, 0.45, 1) 0.7s both;

  @keyframes openModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
