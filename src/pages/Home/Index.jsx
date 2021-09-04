import { Link } from 'react-router-dom';
import styled from "styled-components";
import homeIllustration from '../../assets/home-illustration.svg';
import colors from "../../utils/style/colors";

const WrappedContainer = styled.div`
      width: 90%;
      height: 70%;
      display: flex;
      justify-content: space-evenly;
      padding: 40px 20px;
      margin: 25px 70px; 
      background-color: ${colors.backgroundLight};
`

const TextContainer = styled.h2`
      width: 40%;
      height: 100%;
      font-size: 45px;
      font-weight: bold;
      text-wrap: wrap;
      display: flex;
      flex-direction: column;
`

const StyledImg = styled.img`
    height: 100%;
    width: 40%;
`

const StyledLink = styled(Link)`
        text-decoration: none;
        font-size: 18px;
        padding: 15px;
        color: white; 
        max-width: 200px;
        border-radius: 30px; 
        background-color: ${colors.primary};
        text-align: center;
`

function Home() {

  return (
    <WrappedContainer>
      <TextContainer>
        Reperez vos besoins, on s'occupe du reste, avec les meilleurs talents<br />
        <StyledLink to="/survey/1">Faire le test</StyledLink>
      </TextContainer>
      <StyledImg src={homeIllustration} alt="home Illustartion" />
    </WrappedContainer>
  )
} 

export default Home;