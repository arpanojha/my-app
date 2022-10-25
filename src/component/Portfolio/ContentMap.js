import React, { useState } from "react"

const ContentMap = (props) => {
 const [modal, setModal] = useState(false)

 const toggleModal = () => {
   setModal(!modal)
 }

 if (modal) {
   document.body.classList.add("active-modal")
 } else {
   document.body.classList.remove("active-modal")
 }
 return (
   <>
     <button onClick={toggleModal} className='btn-modal'>
       Open {props.value}
     </button>
     <button onClick={toggleModal} className='btn-modal'>
       Open {props.value}
     </button>
     
   </>
 )
}

export default ContentMap