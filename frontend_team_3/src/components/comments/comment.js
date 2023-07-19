import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
const Comment = ({ item, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const parentEle = useRef(null);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div >
      <div className="col ">
        <div className="d-flex flex-start mt-4" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img className="rounded-circle shadow-1-strong me-3"
            src={item.img} alt="avatar" width="75"
            height="75" />
          <div className="flex-grow-1 flex-shrink-1">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-1">
                  {item.name}
                </p>

                {!showReplyBox && isHovering && (
                  <button
                    type="button"
                    className=" color-secondary btn px-4 py-1 rounded-pill "
                    onClick={() => {
                      setShowReplyBox(true);
                      setTimeout(() => parentEle.current.focus());
                    }}
                  >
                    <FontAwesomeIcon icon={faReply} />
                  </button>
                )}
              </div>
              <p className="small mb-0">
                {item.body}
              </p>
              {showReplyBox && (
                <div className='row my-3'>
                  <div className='col d-flex flex-column radius'>
                    <input className='w-100 form-control rounded-pill ps-3' ref={parentEle} onChange={(e) => { setReplyText(e.target.value); }} placeholder='leave your comment here' />
                    <button onClick={() => {
                      addReply(item.id, replyText);
                      setShowReplyBox(false);
                      setReplyText("");
                    }}
                      className='ms-auto mt-3 color-secondary btn px-4 py-1 rounded-pill'>send</button>
                  </div>
                </div>)}
            </div>
            {item.children.length > 0 && (
              item.children.map((child) =>
              (
                // <Comment key={child.id} item= {child} addReply={addReply}/>
                <div className="d-flex flex-start mt-4" key={child.id}>
                  <img className="rounded-circle shadow-1 me-3"
                    src={child.img} alt="avatar"
                    width="75" height="75" />
                  <div className="flex-grow-1 flex-shrink-1">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1">
                          {child.name}
                        </p>
                        {/* {!showReplyBox && (
                              <button
                                type="button"
                                className="ms-auto mt-3  color-secondary btn px-4 py-1 rounded-pill"
                                onClick={() => {
                                  setShowReplyBox(true);
                                  setTimeout(() => parentEle.current.focus());
                                }}
                              >
                                <FontAwesomeIcon icon={faReply} fade />
                              </button>
                            )} */}
                      </div>
                      <p className="small mb-0">
                        {child.body}
                      </p>
                      {/* {showReplyBox && (
                          <div className='row my-3'>
                            <div className='col d-flex flex-column radius'>
                                <input className='w-100 form-control rounded-pill ps-3'   ref={parentEle} onChange={(e) => {setReplyText(e.target.value);}} placeholder='leave your comment here'/>
                                <button  onClick={() => {
                                        addReply(child.id, replyText);
                                        setShowReplyBox(false);
                                        setReplyText("");}}
                                        className='ms-auto mt-3  color-secondary btn px-4 py-1 rounded-pill'>send</button>
                            </div>
                          </div>)} */}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment