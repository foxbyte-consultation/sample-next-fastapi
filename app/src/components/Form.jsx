import React, { useState } from 'react'
import { Card } from './Card'
import { v4 as uuidv4 } from 'uuid'
import { initialPosts } from '../initialPosts'

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    padding: '20px',
  },
  header: { textAlign: 'center', marginBottom: '20px' },
  main: { width: '800px', margin: '0 auto' },
  input: {
    width: '250px',
    marginBottom: '5px',
    padding: '5px',
    border: '1px solid #cccccc',
    borderRadius: '3px',
  },
  textarea: {
    width: '50%',
    height: '70px',
    lineHeight: '1',
    border: '1px solid #cccccc',
    borderRadius: '3px',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: '14px',
    color: '#ffffff',
    backgroundColor: '#006699',
    borderRadius: '5px',
    height: '35px',
    width: '100px',
  },
  passwordContainer: { marginLeft: '100px', width: '200px' },
  passwordInput: {
    width: '100%',
    border: '1px solid #cccccc',
    borderRadius: '3px',
  },
  hr: { borderColor: '#ffffff' },
}

const formartDateTime = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${year}年${month}月${day}日 ${hours}:${minutes}`
}

export const Form = () => {
  const [posts, setPosts] = useState(initialPosts)
  const [post, setPost] = useState({
    displayName: '',
    dateTime: '',
    message: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost((prevPost) => ({ ...prevPost, [name]: value }))
  }

  const handleCreatePost = (e) => {
    e.preventDefault()
    if (post.displayName.trim() && post.message.trim()) {
      const newMessage = {
        ...post,
        id: uuidv4(),
        dateTime: formartDateTime(new Date()),
      }
      setPosts([...posts, newMessage])
      setPost({
        displayName: '',
        dateTime: '',
        message: '',
        password: '',
      })
    }
  }

  const updatePost = (id, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? updatedPost : post
    )
    setPosts(updatedPosts)
  }
  return (
    <div style={styles.container}>
      <header>
        <h3 style={styles.header}>ひと言掲示板</h3>
      </header>
      <main style={styles.main}>
        <form>
          <p style={{ marginBottom: '0px' }}>表示名</p>
          <input
            style={styles.input}
            id='displayName'
            name='displayName'
            type='text'
            value={post.displayName}
            onChange={handleChange}
          />
          <p style={{ marginBottom: '0px' }}>ひと言メッセージ</p>
          <textarea
            style={styles.textarea}
            id='message'
            name='message'
            value={post.message}
            onChange={handleChange}
          ></textarea>
          <div style={styles.formGroup}>
            <button style={styles.button} onClick={handleCreatePost}>
              書き込む
            </button>
            <div style={styles.passwordContainer}>
              <p>
                あいことば
                <input
                  style={styles.passwordInput}
                  type='text'
                  id='password'
                  name='password'
                  value={post.password}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
        </form>
        <hr style={styles.hr} />
        <Card posts={posts} updatePost={updatePost} />
      </main>
    </div>
  )
}
