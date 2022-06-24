import React from 'react'

const MeetingFooter = () => {
    return (
        <div className="meeting-footer">
          <div
            className="meeting-icons">
            <i class="fa fa-microphone-slash" aria-hidden="true"></i>
          </div>
          <div
            className="meeting-icons ">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
          </div>
          <div
            className="meeting-icons"
            data-tip="Share Screen">
            <i class="fa fa-desktop" aria-hidden="true"></i>
          </div>
        </div>
      );
}

export default MeetingFooter;