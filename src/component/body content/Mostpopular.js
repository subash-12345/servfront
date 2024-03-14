import React, { useState } from 'react';
import axios from 'axios';

function MostPopular() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [review, setReview] = useState('');
  const [file, setFile] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      if (!file || !title || !subtitle || !review) {
        setError('Please fill in all fields and select a file');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('review', review);

      const response = await axios.post('https://serv-r9i3.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setClicked(true); // Set clicked to true after successful submission

    } catch (error) {
      console.error('Error uploading file: ', error);
      
    }
  };

  return (
    <div className='box'>
      <h1 className='A' style={{ color: "green", paddingLeft:"0px"}}>Most Popular:</h1>
      <div className='para'>
        <p className='title'>Title</p>
        <p className='input'> <input style={{ height: "30px", width: "220px" }} type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='I1' /></p>
      </div>
      <div className='img'>
        <div className='flex'>
          <p className='ch'>Image</p>
          <div className="fi">
            <input type="file"  name="file" onChange={handleFileChange} className="fileInput" />
          </div>
        </div>
      </div>
      <div className='sub'>
        <p>Sub Title</p>
        <p className='inpu'> <input style={{ height: "50px", width: "220px" }} type='text' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} /></p>
      </div>
      <div className='p'>
        <p className='DR'>Doctor Reviewed</p>
        <p className='margin'> <input style={{ height: "30px", width: "200px" }} type='text' value={review} onChange={(e) => setReview(e.target.value)} /></p>
      </div>
      <div className='gap'>
         <button onClick={handleSubmit} className='bts' style={{ borderRadius:"8px" ,backgroundColor: "yellow", paddingLeft: "5px" }}><h1>Upload</h1></button> 
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default MostPopular;