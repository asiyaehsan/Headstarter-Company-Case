import React from 'react'
import team from "./images/team.png"
import team2 from "./images/team2.png"

const Team = () => {
    return (
        <div className='bg-slate-100'>
          <div className=''>
            <div className='mt-10 '>
                <img  src={team}/>
                <img  src={team2}/>
            </div>
    
          </div>
        </div>
      );
}

export default Team
