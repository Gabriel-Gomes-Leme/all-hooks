import { useContext, useEffect, useRef } from "react"
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { PostsContext } from "../../contexts/PostsProvider/context"
import { CounterContext } from "../../contexts/PostsProvider/CounterContext/context";
import { decrementCounter } from "../../contexts/PostsProvider/CounterContext/actions";
import { incrementCounter } from "../../contexts/PostsProvider/CounterContext/actions";

export const Posts = () =>{
    const counterContext =  useContext(CounterContext)
    const {counterState, counterDispatch} = counterContext
    const isMounted = useRef(true)
    const postsContext = useContext(PostsContext)
    const {postsState, postsDispatch} = postsContext
    console.log(isMounted.current)
    useEffect(()=>{
        loadPosts(postsDispatch).then((dispatch)=>{
            if (isMounted.current){
                dispatch();
            }
        });
        return () =>{
            isMounted.current=false
            console.log(isMounted.current)
        }
    }, [postsDispatch])

    return (
        <>
        <button onClick={() => incrementCounter(counterDispatch)}>Counter: + {counterState.counter}</button>
        <button onClick={() => decrementCounter(counterDispatch)}>Counter: - {counterState.counter}</button>
        <h1>Posts</h1>
        {postsState.loading && (
            <h2>carregando...</h2>
        )}
        {postsState.posts.map((p)=>(
            <div className="post" key={p.id}>
                <h2 className="post__title">{p.title}</h2>
                <p className="post__text">{p.body}</p>
            </div>
        ))}
        </>
    );
};