import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';

const Home = () => {
    const navigate = useNavigate();
    const { ilogin } = useSelector(store => store.user);
    const clickHandler = ()=>{
        if(ilogin){
        navigate('/chat');
        }else{
            toast.error("Please Login");
            navigate('/login');
          }
        }
    return (
      
        <div className="home-container">
            <div className="left-content">
                <h1>Live Chat</h1>
                <h2>Web Application</h2>
                <p>Reach your customers instantly via web, mobile, and social</p>
                <p>on live chat and messaging</p>
                <button onClick={clickHandler}>Chat Now!</button>
            </div>
            <div className="right-content">
                <img src="https://web-assets.zendesk.com/images/p-capabilities/messaging/hero-2x.jpg" alt="Messaging" />
            </div>
        </div>
      
    );
}

export default Home;
