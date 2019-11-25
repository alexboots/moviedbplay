import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'components/shared/theme'
import { IMG_URL_W200 } from 'utils/constants'
import NoHeadshot from './NoHeadshot.png'

 export const PersonCardsTitle = styled.h1`
  margin-left: 120px;
`
 export const Person = styled.div`
  background-color: ${theme.bg.default};
  min-width: 200px;
  margin: 5px;
  border-radius: 18px;
`
export const PersonCards = styled.section`
  min-width: 80%;
  min-height: 200px;
  display: flex;
  background-color: ${theme.generic.alt};

  overflow-x: auto;
  padding: 30px;
  padding-left: 120px;
  margin-bottom: 120px;
`

const Img = styled.img`
  borderRadius: 6px;
  height: 300px;
  width: 200px;
`

export const PersonCard = ({member}) => {
  const src = member.profile_path ? `${IMG_URL_W200}${member.profile_path}` : NoHeadshot
  return (
    <Person>
      <Img src={src} alt="Photo of person" />
      <div style={{padding: '0 30px'}}>
        <h3 style={{margin: '10px 0 0 0'}}>{member.name}</h3>
        { member.character &&
            <h4 style={{
              display: 'inline-block',
              margin: '12px 0 0 4px',
            }}>
              As {member.character}
            </h4> }

         { member.department && <h4>{member.department}</h4> }
         { member.job && <h4>{member.job}</h4> }
      </div>
    </Person>
  )
};

PersonCard.propTypes = {
  members: PropTypes.array,
}
