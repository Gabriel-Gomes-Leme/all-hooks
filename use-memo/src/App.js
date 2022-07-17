import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect, useCallback, useMemo } from 'react';
import P from 'prop-types'

const Post = ({post}) =>{
  console.log('filho renderizou')
  return(
    <div className="post" key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
Post.propTypes={
  Post:P.shape({
    id:P.number,
    title:P.string,
    body:P.string
  })
}
function App() {
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState('')
  console.log('pai renderizou')

useEffect(()=>{
  setTimeout(function(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json()).then(r=>setPosts(r))
  }, 5000)
}, [])
  return (
    <div className="App">
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <h1>Oi</h1>
      {/* o usememo irá memorizar os posts, para que não sejam renderizados novamente, quando mudar o estado de outro componente */}
      {useMemo(()=>{
        return posts.length>0 && posts.map(post=>{
          return(
            <Post post={post}/>
          )
        })
      }, [posts])}
      {posts.length<=0 && <p>Não existem posts, ou ainda não foram carregados</p>}
    </div>
  );
}

export default App;
