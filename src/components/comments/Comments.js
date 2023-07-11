import React, { useState } from 'react'
import { comments } from '../../data/data'
import Comment from './comment'
const Comments = () => {
  const [inputComment, setInputComments] = useState('')   
    const [comment, setComments] = useState(comments)

    // do add reply comment
    function addReply(commentId, replyText) {
      let commentsWithNewReply = [...comment];
      insertComment(commentsWithNewReply, commentId, replyText);
      setComments(commentsWithNewReply);
    }
    // do  add comment to chidren
    function insertComment(comment, parentId, text) {
      for (let i = 0; i < comment.length; i++) {
        if (comment[i].id === parentId) {
          comment[i].children.unshift((newComment(text)))
        }
      }
    }
    // do new comment
    function newComment(text) {
      return {
        id: +1,
        body: text,
        name : 'Nora Ali',
        img : "https://image.lexica.art/full_jpg/f2a8605f-f7fd-4430-86a0-2870e5a1327a",
        children: []
      };
    }
    const handelClick = ()=>{
      setComments([...comment, newComment(inputComment)]);
      setInputComments("");
    }
  return (
    <div className='px-5 ms-5 comments mt-4'>
       {/* comment list  */}
        <div className="row color-gray radius p-3">
          {
            comment.map( items => (
              <Comment key={items.id} item= {items} addReply={addReply}/>
            ))
          }
        </div>
        {/* comment form  */}
        <div className='row my-3'>
            <div className='col d-flex flex-column radius'>
                <input className='w-100 form-control rounded-pill ps-3' value={inputComment} onChange={e => setInputComments(e.target.value)} placeholder='leave your comment here'/>
                <button onClick={handelClick} className='ms-auto mt-3  color-secondary btn px-4 py-1 rounded-pill'>send</button>
            </div>
        </div>
    </div>
  )
}

export default Comments