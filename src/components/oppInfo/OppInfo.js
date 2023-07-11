import React from 'react'
import Comments from '../comments/Comments'
import UserInfo from '../userInfo/UserInfo'
import Opp from '../opp/Opp'
import {userInfo as items} from '../../data/data.js'

const OppInfo = () => {
  return (
    <div>
      {
          <>
          {items.opp.map( item => <Opp item={item} />)}
            <div className = 'user'>
              <UserInfo item = {items} />
              <Comments />
            </div>
          </>
          
        
      }
        
    </div>
  )
}

export default OppInfo