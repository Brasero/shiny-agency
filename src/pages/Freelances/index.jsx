import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'

import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
`
const StyledTitle = styled.h1`
        font-size: 30px;
        color: black;
        text-align: center;
        padding-bottom: 30px;
`

const StyledSubTitle = styled.h2`
        font-size: 20px;
        color: ${colors.secondary};
        font-weight: 300;
        text-align: center;
        padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Freelances() {

    const [ isDataLoading, setDataLoading ] = useState(false)
    const [ freelancesData, setFreelancesData ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
            async function fetchFreelances() {
                setDataLoading(true)
                try {
                    const response = await fetch(`http://localhost:8000/freelances`)
                    const { freelancersList } = await response.json()
                    setFreelancesData(freelancersList)
                } catch (err) {
                    console.log('==== error ====', err)
                    setError(true)
                } finally {
                    setDataLoading(false)
                }
            }
            fetchFreelances()
    }, [])
    


   /* useEffect(() => {
        setDataLoading(true)
        fetch(`http://localhost:8000/freelances`).then((response) => 
            response.json().then(({ freelancesData }) => {
                setFreelancesData(freelancesData)
                setDataLoading(false)
                console.log(freelancesData)
            })
        )
    }, [])*/

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <StyledTitle>Trouvez votre prestataire</StyledTitle>
            <StyledSubTitle>Chez Shiny nous reunissons les meilleurs profils pour vous.</StyledSubTitle>
            {isDataLoading ? ( 
               <LoaderWrapper>
                   <Loader />
               </LoaderWrapper>

               ) : (

                
                <CardsContainer>
                    {freelancesData.map((profile, index) => (
                        <Card
                            key={`${ profile.name }-${ index }`}
                            label={ profile.job }
                            picture={ profile.picture }
                            title={ profile.name }
                        />
                    ))}
                </CardsContainer>
          

                )}
            
        </div>
    )
}

export default Freelances