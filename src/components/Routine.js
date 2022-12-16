import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewHabit from "./NewHabit";

export default function Routine(){
return(
    <>
    <Navbar/>
    <ContainerHabits>
        <Title>
            <p>Meus Hábitos</p>
            <Add>+</Add>
        </Title>
        <NewHabit/>
    </ContainerHabits>
    <Footer/>
    </>
);
}

const ContainerHabits = styled.div`
min-height: 100vh;
width: 100;
display: flex;
flex-direction: column;
align-items: center;
background-color: #E5E5E5;
color: #126BA5;
`

const Title = styled.div`
margin-top: 25%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding-left: 5%;
padding-right: 5%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 29px;
`

const Add = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
`