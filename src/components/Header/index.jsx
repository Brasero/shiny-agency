import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
        padding: 15px;
        color: #8186a0;
        text-decoration: none;
        font-size: 18px;
        ${(props) =>
            props.$isFullLink &&
                `color: white; border-radius: 30px; background-color: ${colors.primary}`}
`

const StyledNav = styled.nav`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding: 10px 25px;
`

const StyledImg = styled.img`

            margin-right: auto;
`


function Header() {
    return (
        <StyledNav>
            <StyledImg src={logo} alt='logo' />
            <StyledLink to="/">Acceuil</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </StyledNav>
    )
}

export default Header