import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  return (
    <div className='p-3 mx-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>
        Create Post</h1>
    <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type='text' placeholder='Text' required id ='title'
            className='flex-1'/>
            <Select>
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
    <FileInput type='file' accept='image/*'/>
    <Button type='button'gradientDuoTone='purpleToBlue' size='sm' outline>
    Upload image    
    </Button>
    </div>
    <ReactQuill theme='snow' placeholder='write something...' className='h-72 mb-12'/>
    <Button type='submit' gradientDuoTone='purpleToPick'>Publish</Button>
    </form>
    </div>
  )
}

export default CreatePost
