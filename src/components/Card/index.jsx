import PropTypes from 'prop-types'
import DefaultPictures from '../../assets/logo.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
        color: #5843e4;
        font-size: 22px;
        font-weight: normal;
        align-self: flex-start;
        padding-left: 15px;
`
const CardImage = styled.img`
        height: 150px;
        width: 150px;
        align-self:center;
        border-raduis: 50%;
`

const CardTitle = styled.span`
        color: black;
        font-size: 22px;
        font-weight: normal;
        align-self: center;
`

const CardWrapper = styled.div`
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        padding: 15px;
        background-color: ${colors.backgroundLight};
        border-radius: 30px;
        width: 300px;
        height: 300px;
        transition: 200ms;
        &:hover {
            cursor: pointer;
            box-shadow: 2px 2px 10px #e2e3e9;
        }
`


function Card({ label, title, picture }) {

    return (
        <CardWrapper>
            <CardLabel>{ label }</CardLabel>
            <CardImage src={ picture } alt="freelance" />
            <CardTitle>{ title }</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPictures
}



export default Card