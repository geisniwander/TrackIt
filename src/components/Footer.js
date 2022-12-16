import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Menu>
        <p>Hábitos</p><p>Histórico</p>
      </Menu>
      <Progress>
        <p>Hoje</p>
      </Progress>
    </Container>
  );
}
const Container = styled.div`
position: fixed;
bottom: 0;
left: 0;    
width: 100%;
display: flex;
justify-content: center;
box-sizing: border-box;
padding: 3%;
`

const Menu = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
box-sizing: border-box;
padding: 5%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #52B6FF;
background-color: white;

`

const Progress = styled.div`
width: 90px;
height: 90px;
border-radius: 50%;
background-color: #52B6FF;
border: none;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
z-index: 5;
`