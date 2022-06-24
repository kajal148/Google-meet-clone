import React from 'react';
import Participant from './Participant';

const Participants = ({participants}) => {

    const renderedList = participants.map(participant => {
        return <Participant key={participant.id} name={participant.name} color= {participant.color}/>
    })

    return (
        <div
          style={{
            "--grid-size": '4',
            "--grid-col-size": '2',
            "--grid-row-size": '4',
          }}
          className="participants">
          {renderedList}
        </div>
      );
}

export default Participants;