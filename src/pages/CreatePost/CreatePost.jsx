import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/authContext"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>No que está pensando hoje?</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input 
            type="text" 
            name="title" 
            required 
            placeholder='Pense num bom títlo...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Url da imagem:</span>
          <input 
            type="text" 
            name="image" 
            required 
            placeholder='Insira uma imagem que representa o seu post...'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea 
            name="body" 
            required
            placeholder='Insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          >
          </textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name="tags"
            required 
            placeholder='tag1, tag2, tag3...'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="btn">Cadastrar</button>
        {/* {!loading &&<button className="btn">Cadastrar</button>}
            {loading &&<button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost