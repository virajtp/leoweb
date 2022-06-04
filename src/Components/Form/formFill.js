import React, { useState, Component } from 'react';

import ProjectForm from './ProjectForm';
import BlogForm from './BlogForm';
// import PageForm from './anecdoteForm';

const FormFill = () => {
  const [favorite, setFavorite] = React.useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleCatChange = () => {
    setFavorite(true);
  };

  const handleDogChange = () => {
    setFavorite(false);
  };

  return (
    <div>
      <RadioButton
        label="Blogs"
        value={favorite === false}
        onChange={handleDogChange}
      />
      <RadioButton
        label="Projects"
        value={favorite === true}
        onChange={handleCatChange}
      />
      {favorite ? <ProjectForm currentId={currentId} setCurrentId={setCurrentId} /> : <BlogForm currentId={currentId} setCurrentId={setCurrentId} />}
    </div>
  );
};

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default FormFill;