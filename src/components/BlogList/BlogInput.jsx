import PropTypes from "prop-types";
import './BlogInput.css'

function BlogInput({ handleChange, label, placeholder, name, type }) {
  return (
    <div className="blog-input">
      <label>{label}</label>
      {type === "textarea-wide" ? (
        <textarea
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          className="textarea-wide"
        />
      ) : (
        <input
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
        />
      )}
    </div>
  );
}

BlogInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BlogInput;
