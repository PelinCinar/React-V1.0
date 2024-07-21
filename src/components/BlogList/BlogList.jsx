import { useState } from "react";
import BlogItem from "./BlogItem";
import { blogData as initialBlogData } from "../../data/blogData";
import AddNewBlog from "./AddNewBlog";
import "./BlogList.css";

function BlogList() {
  const [blogs, setBlogs] = useState(initialBlogData);
  const [searchTerm, setSearchTerm] = useState("");

  const addBlog = (newBlog) => {
    const id = blogs.length + 1;
    setBlogs([...blogs, { ...newBlog, id }]);
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      )
    );
  };

  const deleteBlog = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.info.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <AddNewBlog addBlog={addBlog} />
      <div className="blog-wrapper">
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
