import ErrorSection from "./components/error_illustration";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const handleButtonClick = () => {
    toast.success('Notification is here!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    console.log ("clicked")
  };

  return (
    <div className="w-full">  
      <ToastContainer/>
      <div className="flex flex-col items-center justify-between h-screen">
        <div className="text-center m-10">
          <h1 className="text-white heading">Lorem Ipsum ...</h1>
          <p className="about">Lorem ipsum dolor sit amet.</p>
        </div>
          <ErrorSection/>
          <button className="text-white send-btn" onClick={handleButtonClick}>Send Notification</button>
      </div>
    </div>
  );
}
