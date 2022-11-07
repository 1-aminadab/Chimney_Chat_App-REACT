// import React from 'react'
// import ProfileImg from '../../../images/profileimg.jpg'
// function OneList(props) {

//   const {name,recentTime,id,} =  props


//   const refContainer = React.useRef(null)

//   const changeStyle = (e)=>{
//     refContainer.current.style.backgroundColor = "var(--mainColor)"
//     console.log(id);
//    }


//   return (
//     <div className="onelist" ref={refContainer}  onClick={changeStyle}   >
      
//     <div className="image">
//       <img src={ProfileImg} alt="" />
//     </div>
    
//     <div className="name-status">
//       <h5>{name}</h5>
//       <div className="last_message">
//        <h6>wellcome</h6>
//       </div>
//     </div>
//       <div className="gettime">
//         <h5>11:50pm</h5> 
//       </div>
    
//    </div>
//   )
// }

// export default OneList