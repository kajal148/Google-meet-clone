import React from 'react'

const Participant = ({name, color}) => {
    return (
        <div className=" participant">
          <div className='card'>
            <i class="fa fa-microphone-slash muted" aria-hidden="true"></i>
            <div style={{ background: color }}
                className="avatar">
                {name[0]}
            </div>
            <div className="name">
              {name}
            </div>
          </div>
        </div>
      );
}

export default Participant;