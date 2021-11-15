import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: tomato;
  display: grid;
  grid-template-rows: 20% 65% 15%;
  grid-template-columns: 60% 40%;
  grid-template-areas:
    "details details"
    "poke attributes"
    "cancel next";
  .details {
    grid-area: details;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > h3{
      font-family: ${p=> p.theme.fonts.title};
      text-transform: uppercase;
      font-size: 2rem;
      color: ${p=> p.colorDefault};
    }
    > section{
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      > article{
        width: 25%;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        > label{
          font-family: ${p=> p.theme.fonts.subTitle};
          font-size: .8rem;
          line-height: 1.3rem;
        }

        > p{
          width: auto;
          display: flex;
          font-family: ${p=> p.theme.fonts.text};
          font-weight: bold;
        }
      }
    }
  }
  .poke {
    grid-area: poke;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    > img{
      width: 60%;
      --webikit-filter: drop-shadow(5px 5px 8px #555);
      filter: drop-shadow(5px 5px 8px #555);
      margin-top: 25px;
    }
  }
  .attributes {
    grid-area: attributes;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > .status{
      font-family: ${p=> p.theme.fonts.text};
      text-transform: uppercase;
      font-weight: bold;
    }
    .progressBar {
    width: 350px;
    border-radius: 15px;
    color: white;
    text-align: end;
    background-color: #ccc;
    > span {
      padding-right: 5px;
      display: block;
      width: 0%;
      height: 100%;
      background-color: ${(p) => p.colorDefault};
      transition: all 2s;
      border-radius: 15px;
    }
  }
  }
  .cancel {
    grid-area: cancel;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    > button{
      width: 250px ;
      height: 80px;
      background-color: transparent;
      border: 3px solid ${p=> p.colorDefault};
      border-radius: 15px;
      font-family: ${p=> p.theme.fonts.subTitle};
      color:${p=> p.colorDefault};
      :hover{
        transform: scale(1.1);
      }
    }
  }
  .next {
    grid-area: next;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > button{
      width: 250px ;
      height: 80px;
      background-color: ${p=> p.colorDefault};
      border: 3px solid ${p=> p.colorDefault};
      border-radius: 15px;
      font-family: ${p=> p.theme.fonts.subTitle};
      color:${p=> p.theme.colors.textDark};
      :hover{
        transform: scale(1.1);
      }
    }
  }

  @keyframes hp {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[0].value > 100 ? 100 : p.status[0].value)}%;
    }
  }
  @keyframes attack {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[1].value > 100 ? 100 : p.status[1].value)}%;
    }
  }
  @keyframes defense {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[2].value >= 100 ? 100 : p.status[2].value)}%;
    }
  }
  @keyframes special-attack {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[3].value >= 100 ? 100 : p.status[3].value)}%;
    }
  }
  @keyframes special-defense {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[4].value > 100 ? 100 : p.status[4].value)}%;
    }
  }
  @keyframes speed {
    0% {
      width: 0%;
    }
    100% {
      width: ${(p) => (p.status[5].value >= 100 ? 100 : p.status[5].value)}%;
    }
  }
`;
