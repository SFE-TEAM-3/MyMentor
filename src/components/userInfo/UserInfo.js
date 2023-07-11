import React from 'react'
import { Link } from 'react-router-dom'
const UserInfo = ({item}) => {
  const hired = item.opp.map(e => e.hired)
  
  return (
    <div className='mb-2 userinfo px-5 pt-5'>
      {/*user information  */}
        <h4 className='data text-capitalize fw-bold mb-4'>about {item.name}</h4>
        <div className='bg-white p-4 radius d-flex flex-column-reverse flex-md-column'>
          <div className='box-info d-flex flex-wrap mt-3  text-capitalize'>
            <div className='info my-2 d-flex flex-column'>
                <p className=' d-flex flex-column'>
                  <span className='data mb-2'>name  </span>
                  <span>{item.name}</span>
              </p>
                  {
                hired ? (
                  <p className=' my-2 d-flex flex-column'>
                  <span className='data mb-2'>job title</span>
                  <span>{item.job_title}</span>
              </p>
                ):''
                
              }

              {
            hired ? (
              <p className=' my-2 d-flex flex-column'>
              <span className='data mb-2'>company</span>
              <span>{item.company}</span>
          </p>
            ): ''
          }
            </div>
            <div className='info my-2 d-flex flex-column'>
                <p className=' my-2 d-flex flex-column'>
                  <span className='data mb-2'>phone Number  </span>
                  <span>{item.phoneNumber}</span>
              </p>
              <p className='my-2 d-flex flex-column'>
                <span className='data mb-2'>email  </span>
                <span>{item.email}</span>
              </p>

            </div>
          
          <div className='info my-2 d-flex flex-column'>
              <ul className=' my-2 ms-0 d-flex flex-column'>
                  <span className='data mb-2'> experise  </span>
                  {item.experise.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
          </div>
        </div>
        {/* user avatar */}
        <div className='d-flex justify-content-between flex-column-reverse flex-md-row'>
          <p className='w-75 user-des'>{item.des}</p>
          <div className='d-flex flex-column align-items-center justify-content-center userAvatar'>
          <img src={item.user_img} alt="avatar" width="100"  height="100" className="rounded-circle shadow-1-strong mb-3"/>
          <Link to="/profile" className='profileBtn px-4 py-2 rounded-pill'>view profile</Link>
          </div>
        </div>
        </div>
    </div>
  )
}

export default UserInfo