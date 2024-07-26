import BlogList from "./components/BlogList/BlogList";
import Header from "./components/Header/Header";
import { blogData } from "./data/blogData";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="app ">
      <Header />
      <BlogList blogs={blogData} />
      {/* <HomePage/> */}
      <LoginPage/>
    </div>
  );
}

export default App;
