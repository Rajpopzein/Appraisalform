import React, { useEffect } from 'react'
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import Registrationform from './Registrationform';
import { message } from "antd";

function Auththen() {
  const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/')
        }

        if(localStorage.getItem("token")){
          const key = "updatable";
          setTimeout(() => {
            messageApi.open({
              key,
              type: "success",
              content: "Logged in",
              duration: 2,
            });
          }, 100);
        }
    },[])

  return (
    <>
      {contextHolder}
    <Navbar/>
    <Registrationform/>
    </>
  )
}

export default Auththen