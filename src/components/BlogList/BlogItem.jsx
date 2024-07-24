import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../UI/Button";
import "./BlogItem.css";

function BlogItem({ blog, updateBlog, deleteBlog }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(blog);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    updateBlog(editData);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    deleteBlog(blog.id);
  };

  return (
    <div className="blog-item">
      {isEditing ? (
        <form className="blog-edit-form" onSubmit={handleSaveClick}>
          
          <label htmlFor="title">Başlık:</label>
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleInputChange}
            placeholder="Başlık"
          />
          <label htmlFor="image">ResimURL:</label>

          <input
            type="text"
            name="image"
            value={editData.image}
            onChange={handleInputChange}
            placeholder="Resim URL"
          />
          <label htmlFor="author">Yazar:</label>

          <input
            type="text"
            name="author"
            value={editData.author}
            onChange={handleInputChange}
            placeholder="Yazar"
          />
          <label htmlFor="info">Açıklama:</label>

          <textarea
            type="textarea-wide"
            name="info"
            value={editData.info}
            onChange={handleInputChange}
            placeholder="Bilgi"
            rows={4}
          />

          <input
            className="blog-date"
            type="date"
            name="date"
            value={editData.date}
            onChange={handleInputChange}
          />
          <div className="form-buttons">
            <Button color="success" size="lg" type="submit">
              Kaydet
            </Button>
            <Button
              color="secondary"
              size="lg"
              onClick={() => setIsEditing(false)}
            >
              İptal
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <strong className="blog-title">{blog.title}</strong>
          <div className="container">
            <div className="blog-info">
              {blog.info}
              <div className="blog-author">{blog.author}</div>
              <div className="blog-date">{blog.date}</div>
              <div className="btn">
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => setIsEditing(true)}
                >
                  Düzenle
                </Button>
                <Button color="danger" size="lg" onClick={handleDeleteClick}>
                  Sil
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// PropTypes doğrulaması ekleyin
BlogItem.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired, // Ensure you have a unique identifier for each blog
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired, // Ensure deleteBlog is required
};

export default BlogItem;
