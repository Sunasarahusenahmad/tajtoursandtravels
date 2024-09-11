import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ value, onChange, placeholder }) => {
  const handleChange = (html) => {
    onChange(html); // Pass the HTML content to the parent component
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      placeholder={placeholder || 'Write something...'}
      formats={Editor.formats}
      bounds="#root"
    />
  );
};

// Quill modules configuration
Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { header: '4' }, { header: '5' }, { header: '6' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'] // remove formatting button
  ],
  clipboard: {
    matchVisual: false
  },
  blotFormatter: {}
};

// Quill editor formats configuration
Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

export default Editor;
