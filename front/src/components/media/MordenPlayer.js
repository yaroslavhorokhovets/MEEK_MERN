import React from 'react';
import '../../assets/stylesheets/ng-app/player/player.scss';
import AudioPlayer from 'react-modern-audio-player';


function MordenPlayer(props) {    

    const playList = [
        {
            name: props.title,
            writer: props.writer,
            img: props.thumbnailPath,
            src: props.filePath,
            id: 1,
        },
    ]
    
    return (
        <div className='fixed-bottom' style={{'display':props.show}}>
            <AudioPlayer
                playList={playList}
                audioInitialState={{
                    muted: false,
                    volume: 1.0,
                    curPlayId: 1,
                    isPlaying: props.show === 'block'?true:false,
                    duration: 20,
                }}
                placement={{
                    interface: {
                        templateArea: {
                            trackTimeDuration: "row1-5",
                            progress: "row1-4",
                            playButton: "row1-6",
                            repeatType: "row1-7",
                            volume: "row1-8",
                        },
                    },
                    player: "bottom-left",
                }}
                rootContainerProps={{
                    colorScheme: "dark"
                }}
                activeUI={{
                    all: true,
                    progress: "bar",
                }}
                autoPlay = {true}
            />
        </div>
    )
}
export default MordenPlayer;