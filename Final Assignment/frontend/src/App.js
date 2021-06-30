import { BrowserRouter as Router, Route} from 'react-router-dom';
import AllPosts from './components/posts/posts';
import Navbar from './NavRoute/NavBar';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <h1>
        Hello World
      </h1>
      <Route path="/posts" component={AllPosts}/>
    </div>
    </Router>
  );
}

export default App;
