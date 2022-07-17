import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect, useCallback, useMemo, useRef } from 'react';
import P from 'prop-types'

const Post = ({post, handleClick}) =>{
  return(
    <div className="post" key={post.id}>
      <h2 onClick={()=>handleClick(post.title)}>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
Post.propTypes={
  Post:P.shape({
    id:P.number,
    title:P.string,
    body:P.string
  }),
  onClick:P.func
}
function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  const input = useRef(null)
  const contador = useRef(0)
  console.log('pai renderizou')

useEffect(()=>{
  setTimeout(function(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json()).then(r=>setPosts(r))
  }, 1000)
}, [])
useEffect(()=>{
  input.current.focus()
  console.log(input.current)
}, [value])
useEffect(()=>{
  contador.current++
})
const handleClick = (value) =>{
  setValue(value)
}
  return (
    <div className="App">
      <input ref={input} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <h1>Renderizou {contador.current}x</h1>
      {/* o usememo irá memorizar os posts, para que não sejam renderizados novamente, quando mudar o estado de outro componente */}
      {useMemo(()=>{
        return posts.length>0 && posts.map(post=>{
          return(
            <Post post={post} handleClick={handleClick}/>
          )
        })
      }, [posts])}
      {posts.length<=0 && <p>Não existem posts, ou ainda não foram carregados</p>}
    </div>
  );
}

export default App;
