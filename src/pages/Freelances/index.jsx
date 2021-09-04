import DefaultPictures from '../../assets/logo.svg'
import Card from '../../components/Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
`
const StyledTitle = styled.h1`
        font-size: 32px;
        color: black;
        text-decoration: none;
        font-weight: bold;
`

const StyledSubTitle = styled.h2`
        font-size: 25px;
        color: silver;
        margin-top: 15px;
        font-weight: unset;
        text-align: center;
`

const freelancesProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPictures
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur Frontend',
        picture: DefaultPictures
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Developpeuse FullStack',
        picture: DefaultPictures
    }
]

function Freelances() {

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <StyledTitle>Trouvez votre prestataire</StyledTitle>
            <StyledSubTitle>Chez Shiny nous reunissons les meilleurs profils pour vous.</StyledSubTitle>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <CardsContainer>
                    {freelancesProfiles.map((profile, index) => (
                        <Card
                            key={`${ profile.name }-${ index }`}
                            label={ profile.jobTitle }
                            picture={ profile.picture }
                            title={ profile.name }
                        />
                    ))}
                </CardsContainer>
            </div>
        </div>
    )
}

export default Freelances