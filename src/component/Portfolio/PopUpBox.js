import React, { useState } from "react"
import ContentMap from "./ContentMap"
import Card2 from "./Card2";
const PopUpBox = (props) => {
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
     {/* <button onClick={toggleModal} className='btn-modal'>
       Open 
     </button> */}
     {

        props.content.map((value,index)=>{
            // return <button onClick={toggleModal} className='btn-modal'>
            // console.log(value.content_name)
            return <Card2 key={index} date={value.date} image = {value.image} title_one={value.content_name} desc_one = {value.desc_one} desc_two={value.desc_two}/>

          //   Open {value.content_name}
          // </button>
        })
     }
     
           

     {modal && (
       <div className='modal'>
         <div onClick={toggleModal} className='overlay'></div>
         <div className='modal-content'>
           <h2>{props.title}</h2>
            <p>{props.content}</p>
           <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT<i class='fas fa-chevron-right'></i>
                </button>
              </div>
           <button className='close-modal' onClick={toggleModal}>
             CLOSE
           </button>
         </div>
       </div>
     )}
   </>
 )
}

export default PopUpBox
