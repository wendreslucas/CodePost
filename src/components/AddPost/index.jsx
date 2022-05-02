import React, { useContext } from 'react'
import { StyleFormCreate } from './style.js'
import Input from '../Inputs/Input'
import TextArea from '../Inputs/InputContent'
import Subtitle from '../Text/Subtitle'
import Label from '../Text/Label'
import Button from '../Buttons/Button'
import Snackbar from '@mui/material/Snackbar'

import Slide from '@mui/material/Slide'
import { PostContext } from '../../context/PostContext'

function TransitionDown(props) {
  return <Slide {...props} direction="down" />
}

function AddPost() {
  const { title, content, handleTitle, handleContent, handleSubmit } =
    useContext(PostContext)

  const [open, setOpen] = React.useState(false)
  const [transition, setTransition] = React.useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <StyleFormCreate onSubmit={handleSubmit}>
        <Subtitle subtitle="What’s on your mind?" />
        <Label bottom="13px" label="Title" />
        <Input
          autoFocus
          name="title"
          value={title}
          type="text"
          onChange={handleTitle}
          placeholder="Title Here"
        />
        <Label bottom="7px" label="Content" />
        <TextArea
          name="content"
          value={content}
          type="text"
          onChange={handleContent}
          placeholder="Content Here"
          max={50000}
        />

        <Button
          onClick={handleClick(TransitionDown)}
          type="submit"
          disabled={!title || !content}
          text="CREATE"
        />
      </StyleFormCreate>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Post created successfully"
        key={transition ? transition.name : ''}
      />
    </>
  )
}

export default AddPost
