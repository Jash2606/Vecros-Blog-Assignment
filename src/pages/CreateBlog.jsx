import React, { useEffect, useState } from 'react'
import { Editor } from '../components';
import Compressor from 'compressorjs';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    heading: "",
    id: "",
    creator: "",
    avatar: "https://github.com/shadcn.png",
    body: "",
    createdAt: "",
    category:"",
    cardThumbnail:"default.jpg",
    isDummy: false
  });

  const [blogBody, setBlogBody] = useState("");

  const handleSubmit = () =>{
    if(localStorage.getItem("posts")){
      const posts = JSON.parse(localStorage.getItem("posts"));
      posts.push(blogData);
      localStorage.setItem("posts", JSON.stringify(posts));
    }else{
      let posts = [];
      posts.push(blogData);
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    alert("Blog creation success.")
    setTimeout(()=>{
      navigate("/")
    },2000)
  }

  useEffect(()=>{
    setBlogData({...blogData, body: blogBody});
  },[blogBody])

  const handleInput = (e)=>{
    if(!blogData.id){
      const date = new Date();
      setBlogData({...blogData, [e.target.name]: e.target.value, id: nanoid(), createdAt: date.toISOString()});
    }else{
      setBlogData({...blogData, [e.target.name]: e.target.value});
    }
  }

  const handleAvatarUpload = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e);

    reader.onload = () => {
      setBlogData({ ...blogData, avatar: reader.result });
    };
  };

  const handleCardThumbnail = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e);

    reader.onload = () => {
      setBlogData({ ...blogData, cardThumbnail: reader.result });
    };
  };

  const handleCompressedUpload = (e, flag) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.6,
      success: (compressedResult) => {  
        flag === "card"? handleCardThumbnail(compressedResult): handleAvatarUpload(compressedResult)
      },
    });
  };

  return (
    <div className='bg-background  box-border p-2 m-auto space-y-5'>
      <div className='space-y-5 md:w-[90%] lg:w-[70%] m-auto'>
        <h2 className='text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 w-fit rounded-md hover:shadow-md m-auto'>
        Write Your Story...
        </h2>
        <input 
          className='p-2 w-full rounded-md placeholder:text-foreground bg-background border'
          id="heading" 
          type="text" 
          name='heading'
          placeholder='Blog Heading...'
          autoFocus
          onChange={(e)=>handleInput(e)}
        />
        <input
          className='p-2 w-full rounded-md placeholder:text-foreground bg-background border'
          type="text" 
          name='creator'
          placeholder='Creator...'
          onChange={(e)=>handleInput(e)}
        />
        <input 
          className='p-2 w-full rounded-md placeholder:text-foreground bg-background border'
          id="heading" 
          type="text" 
          name='category'
          placeholder='Category...'
          autoFocus
          onChange={(e)=>handleInput(e)}
        />
        <label 
          className=' inline-block font-semibold'
          htmlFor="cardThumbnail"
        >
          Upload card Thumbnail below (optional)
        </label>
        <input
          className='p-2 w-full rounded-md placeholder:text-foreground bg-background border'
          id="cardThumbnail"
          type="file"
          onChange={(e)=> handleCompressedUpload(e,"card")}
        />
        <label 
          className=' inline-block font-semibold'
          htmlFor="avatar"
        >
          Upload you profile avatar below (optional)
        </label>
        <input
          className='p-2 w-full rounded-md placeholder:text-foreground bg-background border'
          id="avatar"
          type="file"
          onChange={(e)=> handleCompressedUpload(e,"avatar")}
        />
      </div>

      <div className='text-center py-8 px-4'>
  <span className=' text-4xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>
    Write Your Blog Here
  </span>
  <p className='text-lg font-semibold text-gray-600 dark:text-gray-300 mt-4'>
    Images and videos can be resized.
  </p>
</div>


      <Editor blogBody={blogBody} setBlogBody={setBlogBody} />

      <div className='flex justify-center'>
        <button
          className='p-3 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 dark:bg-gradient-to-r dark:from-teal-700 dark:to-blue-800 dark:hover:bg-gradient-to-r dark:hover:from-teal-800 dark:hover:to-blue-900 font-semibold transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50'
          type='button'
          onClick={handleSubmit}
        >
          Submit Blog
        </button>
      </div>
    </div>
  )
}

export default CreateBlog