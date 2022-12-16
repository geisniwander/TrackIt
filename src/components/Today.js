import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TodayHabit from "./TodayHabit";

export default function Today(){
    return(
        <> 
        <Navbar/> 
        <ContainerHabits>
            <Title>
                <h1>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>
            </Title>
            <TodayHabit/>
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
background-color: #F2F2F2;
color: #126BA5;
`

const Title = styled.div`
margin-top: 25%;
width: 100%;
box-sizing: border-box;
padding-left: 5%;
padding-right: 5%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
h1{
    font-size: 22px;
    line-height: 29px;
    color: #126BA5;
}
p{ 
    font-size: 17px;
    line-height: 22px;
    color: #BABABA;
}
`