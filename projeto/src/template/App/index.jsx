import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/PostsProvider/CounterContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterProvider>
      <PostsProvider>
      <Posts></Posts>
      </PostsProvider> 
      </CounterProvider>
    </div>
  );
}

export default App;
