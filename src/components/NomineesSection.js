
import React, { useState } from "react";
import ReactPlayer from 'react-player';
import '../App.css';
import './NomineesSection.css';
import Button from '@mui/material-next/Button';


function NomineesSection() {
    const [videoClicked, setVideoClicked] = useState(false);

    const handleClick = () => {
      setVideoClicked(true);
    };


    return (
        <>
            <div className="nomineesSection">
            {!videoClicked && <h1>PLAY TO WATCH THE NOMINEES</h1>}
            {videoClicked && <a href='https://www.fifa.com/fifaplus/en/articles/amputee-footballer-oleksy-wins-fifa-puskas-award-richarlison-payet-the-best#:~:text=Amputee%20football%20star%20Marcin%20Oleksy,his%20astonishing%20scissor%2Dkick%20goal.'>
                <h1>REVEAL THE WINNER</h1></a>}
                <div className="videoPlayer">
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=u9G8-46MC8Q&t=3s&ab_channel=Vanemas2'
                        width='1024px'
                        height="600px"
                        light="true"
                        onClick={handleClick}
                    />
                </div>
                <div className='buttons'>
                    </div>
            </div>
        </>
    )
}
export default NomineesSection;