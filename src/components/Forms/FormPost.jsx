import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../api/posts'
import Header from '../Header'
import Delete from '../icons/Delete'
import Edit from '../icons/Edit'
import Moment from '../Text/Moment'
import Text from '../Text/TextContent'
import User from '../Text/User'
import moment from 'moment'

const StyleForm = styled.div`
  border: 1px solid;

  width: 723px;
`
const BackImagem = styled.div`
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 190px;
`
const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DivInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DivTeste = styled.div`
  padding-bottom: 10px;

  border-bottom: 1px solid;
`

const FormPost = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    api
      .get('/posts')
      .then(response => setPost(response.data))
      .catch(err => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  if (!post) return <p>... Carregando</p>

  let begin = Date.now()

  function calcTime() {
    let end = Date.now()
    let time = end - begin
    return time
  }

  return (
    <StyleForm>
      {post.map(post => (
        <DivTeste key={post}>
          <DivHeader key={post?.id}>
            <Header size=" 723px" title={post?.title} />
            <BackImagem>
              <Delete />
              <Edit />
            </BackImagem>
          </DivHeader>
          <DivInfo>
            <User user={post?.username} />
            <Moment moment={moment(post?.created_datetime).fromNow()} />
          </DivInfo>
          <Text text={post?.content} />
        </DivTeste>
      ))}
    </StyleForm>
  )
}

export default FormPost
