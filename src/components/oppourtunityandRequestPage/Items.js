import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Items = ({item, removeItem}) => {
    const [isShowList, setIsShowList] = useState(false)
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
      const handleMouseOut = () => {
        setIsHovering(false);
      };
      
  return (
    <>
    <div className="published1" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
    <div className="details d1" >
      <div>{item.title}</div>
      <div className="updated">
        <div className="date1">{item.time_and_date}</div>
        <div className="status1">{item.status}</div>
      </div>
    </div>
    <div className="buttons1 b1">
      <button className="btn1" onClick={()=> setIsShowList(!isShowList)}>
        {item.requests.length} Requests
      </button>
      {isHovering && <FontAwesomeIcon icon={faTrash} className='trash' onClick={removeItem}/>}
    </div>
    </div>
      { isShowList && (
        item.requests.map((child, i)=> (
        <div className="disapear1_inprogress" key={i}>
      <div className="developer1">
        <div className="details1">
          <img className="img1" src={child.img} alt="logo" />
          <div className="content">
            <p className="cyan">{child.username}</p>
            <p>{child.title}</p>
          </div>
        </div>
        <div className="buttons1 bb1">
          <button className="btn2">Accept</button>
          <button className="btn3">Reject</button>
        </div>
      </div>
        </div>
        ))
       )
      }
    </>
   
  )
}

export default Items