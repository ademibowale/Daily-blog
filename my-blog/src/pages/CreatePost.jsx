import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'; 
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom'; 

function CreatePost() {

const [file,setFile]=useState(null)
const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();
const handleUpdloadImage = async () => {
  try{

    if (!file) {
      setImageUploadError('Please select an image');
      return;
  }
  const storage = getStorage(app);
  const fileName = new Date().getTime() + '-' + file.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setImageUploadProgress(progress.toFixed(0));
    },
    (error) => {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
    },
   
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUploadProgress(null);
          setImageUploadError(null);
          setFormData({ ...formData, image: downloadURL });
        });
      }
    );
  } catch (error) {
    setImageUploadError('Image upload failed');
    setImageUploadProgress(null);
    console.log(error);
  }

};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('/api/post/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!res.ok) {
      setPublishError(data.message);
      return;
    }
    if (res.ok) {
      setPublishError(null);
      navigate(`/post/${data.slug}`);
    }
  } catch (error) {
    setPublishError('Something went wrong');
  }
};

return (
    <div className='p-3 mx-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>
        Create Post</h1>
    <form className='flex flex-col gap-4' onClick={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type='text'
             placeholder='Text'
              required id ='title'
            className='flex-1'
            onChange={(e)=>
            setFormData({ ...formData,title: e.target.value})}/>
            <Select onChange={(e)=>setFormData({...formData,category:e.target,value})}>
                <option value='uncategorized'>Selecta category</option>
                <option value='food&beverages'>Food & Beverages</option>
                <option value='entertainment '>Entertainment</option>
                <option value='Relatioship talks'>Programming</option>
                <option value='healthcare'>Health Care</option>
                <option value='marriage'>Marriage</option>
                <option value='sport'>Sport</option>
                <option value='games'>Games</option>
                <option value='comedy'>Comedy</option>
                <option value='mydailypeople'>My Daily People</option>
                <option value='worldnews'>World News</option>
                <option value='naija news'>Naija News</option>
                <option value='rantpeople'>Rant People</option>
                <option value='giveaway'>Give Away</option>
           </Select>
        </div>
 <div className='flex gap-4 items-center justify-between bolder-4 bolder-teal-500 bolder-dotted p-3'>
    <FileInput type='file' accept='image/*' onChange={(e)=>
    setFile(e.target.file[0])}/>
    <Button 
    type='button'
    gradientDuoTone='purpleToBlue' 
    size='sm' 
    outline onClick={handUploadImage}>
    Upload image    
    </Button>
    </div>
    <ReactQuill 
   theme='snow'
   placeholder='Write something...'
   className='h-72 mb-12'
   required
   onChange={(value) => {
     setFormData({ ...formData, content: value });
   }}
 />
    <Button type='submit' gradientDuoTone='purpleToPick'>Publish</Button>
    {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
    </form>
    </div>
  )
}

export default CreatePost
