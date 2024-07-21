import BlogList from './components/BlogList/BlogList'
import Header from './components/Header/Header';
import { blogData } from './data/blogData';

function App () {
  
  return (
    <div className='app'>
         <Header />
      <BlogList blogs={blogData}/>
      
    </div>  
  )
}

export default App
