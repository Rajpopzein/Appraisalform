import React, { useEffect, useState } from 'react'
import { Button, Popover } from 'antd';

function NavSecond() {
    const handlelogout = (e)=>{
      localStorage.clear()
      window.location.reload()
    }
    const content = (
        <div>
          <p>About</p>
          <Button onClick={handlelogout}>Logout</Button>
        </div>
      );

  return (
  <Popover content={content} title={localStorage.getItem('name')}>
    <img style={{borderRadius:'360px', width:'50px'}} src={localStorage.getItem('datas')} />
  </Popover>
);

}

export default NavSecond