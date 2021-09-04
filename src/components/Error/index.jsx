import ErrorImg from '../../assets/404.svg'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledImgBlock = styled.div`
    width: 90%;
    height: 550px;
    background: url(${ErrorImg}) no-repeat;
    background-position: bottom;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
`

function Error() {
    
    return (
        <StyledContainer>
            <StyledImgBlock>Oups...</StyledImgBlock>
            <div>Il semblerait qu'il y ait un problème</div>
        </StyledContainer>
    )
}

export default Error