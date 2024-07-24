import { useState } from "react";
// import Spinner from "../UI/Spinner";
import BlogItem from "./BlogItem";
import { blogData as initialBlogData } from "../../data/blogData";
import AddNewBlog from "./AddNewBlog";
import "./BlogList.css";


function BlogList() {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("date");
  // const [isShowLoading, setShowLoading] = useState(false)

  const addBlog = (newBlog) => {
    const id = blogs.length + 1;
    setBlogs([...blogs, { ...newBlog, id }]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  const deleteBlog = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const filteredBlogs = blogs
    .filter((blog) =>
      blog.info.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortType === "az") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  // function fetchBlogs() {
  //   fetch("http://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }//setBogs ta dizin yapmalıyız ki çalışsın.
  
  return (
    <div className="blog">
      {/* <button onClick={fetchBlogs} className="btn-primary ">OKEİİ LES GO</button> */}
      <AddNewBlog addBlog={addBlog} />
      <div className="search-sort-container">

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortType} onChange={handleSortChange}>
          <option value="date">Tarihe Göre Sırala</option>
          <option value="az">A- Zye Sırala</option>
        </select>
      </div>
      <div className="blog-wrapper">
      {/* {isShowLoading && <Spinner/>} */}
        {filteredBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            image={blog.image}
            title={blog.title}
            info={blog.info}
            date={blog.date}
            author={blog.author}
            updateBlog={updateBlog}
            deleteBlog={deleteBlog}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
