import { Fragment, useState } from "react";
import Button from "../UI/Button";
import "./AddNewBlog.css";
import PropTypes from "prop-types";
import BlogInput from "./BlogInput";
import Modal from "../UI/Modal";

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
    type: "textarea-wide",
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
  });

  const [isShowModal, setIsShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog(blogData);
    setBlogData({ title: "", image: "", info: "", date: "", author: "" }); // Inputları temizle
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isFormValid = Object.values(blogData).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid) {
      setIsShowModal(true);
      return;
    }
    handleSubmit(event);
  };

  return (
    <Fragment>
      <div className="form-container">
        <form className="blog-form" onSubmit={onSubmit}>
          {blogInputs.map((input, index) => (
            <BlogInput
              key={index}
              {...input}
              handleChange={handleChange}
              value={blogData[input.name] || ""}//value propu geçirdik
            />
          ))}
          <Button size="lg" color="success" type="submit">
            Ekle
          </Button>
        </form>
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title="Form Kontrol"
          desc="Input alanları boş geçilemez"
        />
      )}
    </Fragment>
  );
};

AddNewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default AddNewBlog;
