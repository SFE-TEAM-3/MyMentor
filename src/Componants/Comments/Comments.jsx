import React from 'react'
import "./comments.css"

function Comments() {
  return (
    <div className='Comments'>
      
      <div className="comment-container">
        {/* <h1> Commments section </h1> */}
        <div className="Comments-BigBox">

         <div className="singleComment-Replay">
          <div className="singleComment">
            <div className="commentImg"></div>
              <div className="commentContentBox">
                  <span className='commentName' >Norahn Ali</span>
                  <input type="text" placeholder='lorem8' />
               </div> {/** end commentContentBox */}
            </div> {/** end singleComment */}
            <hr />

            <div className="singleComment-Replay-comment">
                <div className="singleComment-Replay">
                    <div className="singleComment">
                    <div className="commentImg"></div>
                    {/* <input className='commentName' type="text"  value="Norahn Ali" placeholder='Norahn Ali'/>  */}
                      <div className="commentContentBox">
                        <span className='commentName' >Norahn Ali</span>
                        <input type="text" placeholder='lorem888888888888888888888888888888888888888888888888888888888888' />
                      </div> {/** end commentContentBox */}

                    </div> {/** end singleComment */}

              </div> {/** end singleComment-Replay */}

              
            </div> {/**end singleComment-Replay-comment */}
            <hr />

            
          </div> {/** end singleComment-Replay */}

                 
          <div className="singleComment">
            <div className="commentImg"></div>
            <div className="commentContentBox">
                <span className='commentName' >Norahn Ali</span>
                <input type="text" placeholder='lorelllllllllllllllllllllllllllllllllllllllm8' />
            </div> {/** end commentContentBox */}
            
          </div> {/** end singleComment */}


        </div> {/** end Comments-BigBox */}

        <div className="commentsBtm">

          <input type="text"  placeholder='leave your comments here '   />


        </div> {/** end commentsBtm */}

        <button className='buttonDefault' > Send </button>


      </div> {/** end comment-container */}

    </div> /** end Comment  */
  )
}

export default Comments
