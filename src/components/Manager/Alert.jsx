import React,{useState} from 'react'

import { Alert} from 'antd';
import { useSelector } from 'react-redux';

const Alerts = () => {
   
    const {visible,contentAlert} =useSelector(state=>state.reducer.modalAlert)
  return (
    <div style={{position:"absolute",zIndex:10, left:"50%" ,top:"12px"}} >
         {visible && (
        <Alert message="Success Tip" type="success" afterClose={visible} description={contentAlert}  showIcon/>
      )}   
    </div>
  )
}

export default Alerts