import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const WrappedContainer = styled.div`
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: Column;
        align-items: center;
        justify-content: space-evenly;
        padding: 40px 20px;
        margin: 25px 70px; 
        background-color: ${colors.backgroundLight};
`

const StyledLinkContainer = styled.div`
            margin-top: 25px;
            display: flex; 
            flex-direction: row;
            justify-content: space-between;
            max-width: 600px;
            min-width: 400px;

`

const StyledTitle = styled.h2`
            font-size: 32px;
            text-decoration: underline;
            color: ${colors.primary};
            font-weight: bold;
`

const StyledText = styled.div`
            font-size: 22px;
            color: silver;
`
const StyledButton = styled.button`

        height: 50px;
        width: 90px;
        border-radius: 20px;
        border: 1px solid ${colors.primary};
        &:hover {
            cursor: pointer;
            background: ${colors.primary};
            color: white;
            transform: scale(1.1);
        }
`
const ButtonContainer = styled.div`

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 200px;
            margin-top: 25px;
`

const questionsList = [
    {
        id: 1,
        question: 'Voici ma question 1'
    },
    {
        id: 2,
        question: 'Voici ma question 2'
    }
]



function Survey() {

    
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const nextQuestionNumber = questionNumberInt + 1
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const questionToAsk = questionsList.find(question => question.id === questionNumberInt)

    return (
        <WrappedContainer>
            <StyledTitle>Question { questionNumber }</StyledTitle>
            <StyledText>{questionToAsk.question}</StyledText>

            <ButtonContainer>
                <StyledButton>Oui</StyledButton>
                <StyledButton>Non</StyledButton>
            </ButtonContainer>

            <StyledLinkContainer>
                <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                {
                    questionNumberInt === 10 ? (
                        <Link to="/results">Résultats</Link>
                    ) : (
                        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                    )
                }
            </StyledLinkContainer>
            
        </WrappedContainer>
    )
}



export default Survey;