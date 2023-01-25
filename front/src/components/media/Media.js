import React from 'react';
import '../../assets/stylesheets/ng-app/layout/main.scss';
import '../../assets/stylesheets/ng-app/static_page.scss';
import ReactAudioPlayer from 'react-audio-player';

function Media() {
    return (
        <div>
            <ReactAudioPlayer
                src="/audio.mp4"
                autoPlay={true}
                controls
                style={{'width':'100%'}}
            />
        </div>
    )
}
export default Media;