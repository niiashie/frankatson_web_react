import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpeg";
import placeholder from "../assets/img_placeholder.png";
import axios from 'axios';
import Swal from 'sweetalert2'

function AddNewsPage(){

    const navigate = useNavigate();
    const [image, setImage] = useState(false);
    const [fileName, setFileName] = useState("No selected file");

    function chooseImage(){
        console.log("Hello");
        document.getElementById("file").click();
    }

    function showError(message){
      Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'Okay'
        })
  }

    const fileChangeHandler = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFileName(e.target.files[0].name);
    };

    function addNewsRequest(){
      // "title": title!.text,
      // "content": content!.text,
      // "description": description!.text,
      // "author_id": appService.localStorage['id'],
      // "cover_img": MultipartFile.fromBytes(selectedFile!, filename: "cv")
      var bodyFormData = new FormData();
      bodyFormData.append("title",document.getElementById('title').value);
      bodyFormData.append("description",document.getElementById('description').value);
      bodyFormData.append("content",document.getElementById('content').value);
      bodyFormData.append("author_id",localStorage.getItem('id'));
      bodyFormData.append("cover_img",document.getElementById("file").files[0])
      axios({
        method: "post",
        url: "http://frankowebbackend.test/api/news",
        data: bodyFormData,
        headers: { 
          "Content-Type": "multipart/form-data",
          "Authorization" : "Bearer "+localStorage.getItem('token')
         },
      })
        .then(function (response) {
          //handle success
          console.log("success "+response);
        })
        .catch(function (response) {
          //handle error
          console.log("error "+response);
        });
    }

    function verifyInput(){
      var title = document.getElementById('title').value;
      var description = document.getElementById('description').value;
      var content = document.getElementById('content').value;
      
      if(title == ""){
        showError("News title required please");
      }
      else if(description == ""){
        showError("News description required please");
      }
      else if(content == ""){
        showError("News content required please");
      }
      else if(image == false){
        showError("News cover image required please");
      }
      else{
        
        addNewsRequest();
      }
    }
   
    return <div className="w-[100vw] h-[100vh] bg-white flex flex-col">
       <div className="gradient h-[80px] w-full relative drop-shadow-md">
        <div className='px-2 py-2  left-[25px] top-[7px] absolute flex flex-row items-center'>
         <img src={logo}  className="w-[50px] h-[50px] rounded-[10px] drop-shadow-md"></img>
         <label className='font-poppins_medium ml-3  text-2xl text-white'>Frankatson</label>

        </div>
        <div className='w-full py-2  my-[20px]  flex flex-row items-center justify-center'>
            <label onClick={() => navigate(-2)} className='font-poppins_regular text-sm text-white hover:cursor-pointer'>Home</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-4 text-white ml-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <label onClick={() => navigate(-1)} className='font-poppins_regular text-sm text-white hover:cursor-pointer ml-[15px]'>News</label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-4 text-white ml-[15px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <label className='font-poppins_regular text-lg text-white  ml-[15px]'>Add News </label>
        </div>
       </div>
       <div className="flex-1 flex flex-col items-center justify-center">
          <img src={logo} className="w-[80px] h-[80px] rounded-[15px] drop-shadow-md"></img>
          <label className="text-gray-400 font-poppins_regular text-sm mt-[15px]">Fill in the details required to add news</label>
          <div className="w-[80vw] py-[20px] px-[25px] bg-gray-100 rounded-[15px] drop-shadow-md mt-4 flex flex-row items-center">
            <div className="w-[200px] h-[200px]   relative">
              {
                image == false ? <img src={placeholder}  className="w-[170px] h-[170px] rounded-[10px] ml-[15px] mt-[15px] drop-shadow-md"></img>
                : <img src={image} className="w-[170px] h-[170px] rounded-[10px] ml-[15px] mt-[15px] drop-shadow-md"></img>
              }
              
              <div onClick={()=> chooseImage()} style={{ background: "rgb(200,36, 113)" }} className="w-[40px] h-[40px] rounded-[10px] absolute bottom-[5px] right-[5px] items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>

              </div>
            </div>
            <div className="flex-1 flex flex-col ml-[15px]">
             <label className="font-poppins_light text-gray-400 ml-[10px]  text-sm">Title</label>
             <div className="w-full ml-[10px]  mt-[5px] h-[45px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[45px]  items-center justify-center flex">
             
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>


              </div>
              <input type="text" id="title" name="fname" placeholder="Enter news title" className="flex-1 mx-2 focus:outline-none font-poppins_light text-sm"></input>
            </div>
            <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Brief Description</label>
            <div className="w-full ml-[10px]  mt-[5px] h-[100px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[100px]  items-center justify-center flex">
             
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>


              </div>
              <textarea type="text" id="description" name="fname" placeholder="Enter brief description of news" className="flex-1 mx-2 py-[10px] focus:outline-none font-poppins_light text-sm"></textarea>
            </div>
            <label className="font-poppins_light text-gray-400 ml-[10px] mt-[10px] text-sm">Content</label>
            <div className="w-full ml-[10px]  mt-[5px] h-[100px] rounded-[10px] bg-white border-gray-200 border-[1px] flex flex-row">
              <div className="w-[50px] h-[100px]  items-center justify-center flex">
             
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>


              </div>
              <textarea type="text" id="content" name="fname" placeholder="Enter news content" className="flex-1 mx-2 py-[10px] focus:outline-none font-poppins_light text-sm"></textarea>
            </div>
            <input type="file" id="file" hidden accept="image/png, image/jpeg, image/jpg"  onChange={fileChangeHandler} alt="Submit" width="48" height="48"></input>
            <div className="mt-[15px] w-full h-[45px]  relative">
               <button onClick={()=>verifyInput()} style={{ background: "rgb(200,36, 113)" }} className="right-0 absolute w-[120px] h-[45px] text-sm font-poppins_regular rounded-[25px] drop-shadow-lg text-white">Add News</button>
            </div>
            </div>
            
          </div>
       </div>
    </div>

}
export default AddNewsPage;