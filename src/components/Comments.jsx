import React, { useState, useEffect } from 'react'
import { AddComment } from './AddComment'
import { Comment } from './Comment'

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const fetchComments = async (url) => {
      const data = await (await fetch(url)).json()
      setComments(data)
    }

    fetchComments(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    )
  }, [postId])

  const handleCommentSubmit = (e, commentText, setCommentText) => {
    e.preventDefault()

    const trimmedText = commentText.trim()
    if (!trimmedText) return
    const userId = comments.length + 1
    const comment = {
      id: userId,
      name: `User Name ${userId}`,
      body: trimmedText,
    }
    setCommentText('')
    setComments([comment, ...comments])
  }

  return (
    <>
      <AddComment handleCommentSubmit={handleCommentSubmit} />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  )
}
