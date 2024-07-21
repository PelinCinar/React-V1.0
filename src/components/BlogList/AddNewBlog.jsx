import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewBlog.css";
import PropTypes from "prop-types";

const AddNewBlog = ({ addBlog }) => {
  const [blogData, setBlogData] = useState({
    //boş blog gönderimizi hazırlıyoruz
    title: "",
    image: "",
    info: "",
    date: "",
  });
  //computed property yapısını kullanıyoruz name ve valuemuz adına
  const handleChange = (event) => {
    //inputlarımızı yakalıyoruz
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value }); //name ve value değerlerimizi alıp blogdatamızı güncelliyoruz
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBlog(blogData); // Yeni blog'u ekleme fonksiyonuna ilettiyorz
    setBlogData({ title: "", image: "", info: "", date: "" }); // Formu sıfırlıyoruzs
  };

  return (
    <div className="form-container">
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="blog-input">
          <label>Başlık</label>
          <input
            type="text"
            onChange={handleChange} //her inputumuz için fonksiyon atadık
            placeholder="Başlık giriniz..."
            name="title"
            value={blogData.title}
            required
          />
        </div>
        <div className="blog-input">
          <label>Resim URL</label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Resim URL giriniz..."
            name="image"
            value={blogData.image}
            required
          />
        </div>
        <div className="blog-input">
          <label>Bilgi</label>
          <textarea
            onChange={handleChange}
            placeholder="Bilgi giriniz..."
            name="info"
            value={blogData.info}
            rows={4}
            required
          />
        </div>
        <div className="blog-input">
          <label>Tarih</label>
          <input
            type="date"
            onChange={handleChange}
            name="date"
            value={blogData.date}
            required
          />
        </div>
        <Button size="lg" color="success" type="submit">
          Ekle
        </Button>
       
      </form>
    </div>
  );
};

AddNewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default AddNewBlog;
