import React, {useState, useRef, useContext} from 'react'
import AuthContext from '../../store/auth-context';
import Hoc from '../hoc/hoc';
const DishForm = () => {
    const authCtx = useContext(AuthContext);
    const nameInputRef = useRef();
    const categoryRef = useRef();
    const [fileInputState,setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [imageUrl, setImageurl] = useState('');
    const handlerFileInputChange = (e) => {
        const file = e.target.files[0];
        console.log(file)
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }
    const uploadImage = async (base64EncodedImage) => { 
       
        let URL = 'http://localhost:8080/image/uploadimages';
        try {
            let res = await fetch(URL,{
             method: 'POST',
             body: JSON.stringify({data: base64EncodedImage}),
             headers: {'Content-Type': 'application/json',
                        'authtoken': authCtx.token
                        },
            })
           let imageUrl = await res.json();
          
            setImageurl(imageUrl);
            setFileInputState('');
            setPreviewSource('');
        } catch(err){
            console.log(err);
 
        }
    }
    const handlerFileInput = () => {
     
    
      if(!selectedFile) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
          uploadImage(reader.result);
         
      };
      reader.onerror = () => {
          alert('Something went wrong')
      }
       
      
     
 
    }
  
     const submitHandler = (event) => {
         event.preventDefault();
         const enteredName = nameInputRef.current.value;
        
         const sellerId = 5;
         
        
        
         const enteredCategory = categoryRef.current.value;
         const dishData = {};
         dishData.name = enteredName;
        
         dishData.category = enteredCategory;
         dishData.sellerId = sellerId;
         const URL = "http://localhost:8080/dishes";
         handlerFileInput();
         let image_ = imageUrl.image_url;
         dishData.image = image_;
         console.log("image test ",image_);
         fetch(URL,{
             method: "POST",
             body: JSON.stringify(dishData),
             headers: {
                 'Accept': 'application/json, text/plain, */*',
                 'Content-Type': 'application/json',
                 "authtoken": authCtx.token
               },
         })
         .then((res) => {
             if(res.ok){
                 return res.json();
             } else {
                 return res.json().then((data) => {
                     let errorMessage = "Submission failed!";
                     throw new Error(errorMessage);
                 })
             }
            
         })
         .then(resData => {
             console.log(resData)
         }) 
         .catch((err) => {
             alert(err.message)
         })
     }
     return (
         <Hoc>
             <div>
                 <div className="md:grid md:grid-cols-3 md:gap-6 m-20">
                     <div className="md:col-span-1">
                         <div className="px-4 sm:px-0">
                         <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                         <p className="mt-1 text-sm text-gray-600">
                             This information will be displayed publicly so be careful what you share.
                         </p>
                         </div>
                     </div>
                     <div className="mt-5 md:mt-0 md:col-span-2">
                         <form onSubmit={submitHandler}>
                         <div className="shadow sm:rounded-md sm:overflow-hidden">
                             <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                             <div className="grid grid-cols-3 gap-6">
                                 <div className="col-span-3 sm:col-span-2">
                                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                     name
                                 </label>
                                 <div className="mt-1 flex rounded-md shadow-sm">
                                    
                                     <input
                                     type="text"
                                     name="company_website"
                                     id="company_website"
                                     ref={nameInputRef}
                                     className="focus:ring-indigo-600 focus:border-indigo-500 flex-1 block w-full h-10 rounded-none rounded-r-lg lg:text-lg border-gray-400"
                                   
                                     />
                                 </div>
                                 </div>
                             </div>
 
                             <div>
                                 <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                 category
                                 </label>
                                 <div className="mt-1">
                                     <select ref={categoryRef} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                         <option>burger</option>
                                         <option>french toast</option>
                                         <option>barbeque</option>
                                         <option>strudel</option>
                                         <option>icecream</option>
                                     </select>
                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                     </div>
                                 </div>
                               
                             </div>
 
                         
 
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                 <div className="space-y-1 text-center">
                                     {previewSource ? <img src={previewSource} alt="chosen" style={{ height: '300px'}}/> :  
                                         <svg
                                         className="mx-auto h-12 w-12 text-gray-400"
                                         stroke="currentColor"
                                         fill="none"
                                         viewBox="0 0 48 48"
                                         aria-hidden="true"
                                         >
                                         <path
                                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                         />
                                         </svg>}
                                     {previewSource ? <></> :   
                                         <div className="flex text-sm text-gray-600">
                                         
                                         <label
                                             htmlFor="file-upload"
                                             className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                         >
                                             <span>Upload a file</span>
                                             <input id="file-upload" 
                                                 name="file-upload" 
                                                 value={fileInputState}
                                                 type="file" 
                                                 onChange={handlerFileInputChange}
                                                 className="sr-only" />
                                         </label>
                                         <p className="pl-1">or drag and drop</p>
                                     </div> }
                                   {previewSource ? <></> : <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> }  
                                     
                                     </div> 
                                 </div> 
                             </div>
                             </div>
                             <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                 <button
                                     type="submit"
                                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                 >
                                     Save
                                 </button>
                             </div>
                     </div>
                     </form>
                 </div>
                 </div>
             </div>
 
         </Hoc>
     )
 }

export default DishForm
