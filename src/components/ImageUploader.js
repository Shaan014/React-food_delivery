import React from 'react';

function ImageUploader({ onImageChange, imagePreview }) {
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label>Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && (
        <div className="upload-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
