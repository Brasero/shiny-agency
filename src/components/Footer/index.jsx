
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

const FooterContainer = styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 25px;
`

const NightModeButton = styled.button`
        background-color: transprent;
        border: none;
        cursor: pointer;
        color: ${colors.secondary};
        padding: 10px 15px;

`

function Footer() {

    const { toggleTheme, theme } = useTheme()

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? 'jour' : 'nuit'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer