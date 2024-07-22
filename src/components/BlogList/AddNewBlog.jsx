import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewBlog.css";
import PropTypes from "prop-types";
import BlogInput from "./BlogInput";

const blogInputs = [
  {
    label: "Başlık*:",
    type: "text",
    placeholder: "Blog başlığı giriniz..",
    name: "title",
  },
  {
    label: "Yazar*:",
    type: "text",
    placeholder: "Yazar adı giriniz..",
    name: "author",
  },
  {
    label: "Resim Url*:",
    type: "text",
    placeholder: "Blog görseli giriniz..",
    name: "image",
  },
  {
    label: "Açıklama*:",
    type: "text",
    placeholder: "Blog açıklaması giriniz..",
    name: "info",
  },
  {
    label: "Date*:",
    type: "date",
    placeholder: "Blog tarihi giriniz..",
    name: "date",
  },
];

const AddNewBlog = ({ addBlog }) => {
  const [blogData, setBlogData] = useState({
    title: "",
    image: "",
    info: "",
    date: "",
    author: "",
  }); //AddnewBlogtan içindeki inputlardan değeri alıyoruz yani state olark blogData

  console.log(Object.values(blogData));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog(blogData);
    setBlogData({ title: "", image: "", info: "", date: "" });
  };

  function onSubmit(event) {
    event.preventDefault();
    const isFormValid = Object.values(blogData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid){
      console.error("İNPUT ALANI BOŞ GEÇİLEMEZ");
      return;
    }
    handleSubmit(event);
  }

  return (
    <div className="form-container">
      <form className="blog-form" onSubmit={onSubmit}>
        {blogInputs.map((input, index) => (
          <BlogInput key={index} {...input} handleChange={handleChange} />
        ))}

        <Button size="lg" color="success" type="submit">
          Ekle
        </Button>
      </form>
    </div>
  );
};

AddNewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func,
};

export default AddNewBlog;
