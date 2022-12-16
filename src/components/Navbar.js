import styled from "styled-components";
import logo from "../assets/logo.png"
export default function Navbar(){
    return(
        <Nav>
            <p>TrackIt</p>
            <img alt="foto-perfil" src={logo}/>
        </Nav>
    );
}

const Nav = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 70px;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 5%;
overflow: hidden;
p{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 49px;
    color: #FFFFFF;
}

img{
    width: 10%;
    background-color: white;
    border-radius: 100%;
}
`