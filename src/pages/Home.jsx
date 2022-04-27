import React, { useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Footer from '../components/Footer'

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 81vh;
`
export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  useEffect(() => {
    document.title = 'CodePost | Home'
  }, [])

  return (
    <>
      <Header />
      <StyleDiv>
        <StyleImage>
          <img
            src="/codepost_logo.svg"
            alt="CodeLeap Logo"
            width="608"
            height="167"
          />
        </StyleImage>
      </StyleDiv>
      <Footer />
    </>
  )
}

export default Home
