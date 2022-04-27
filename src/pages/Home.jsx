import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 89vh;
`

export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <img
            src="/codeleap_logo_black.png"
            alt="CodeLeap Logo"
            width="608"
            height="167"
          />
        </StyleImage>
      </StyleDiv>
    </>
  )
}

export default Home
