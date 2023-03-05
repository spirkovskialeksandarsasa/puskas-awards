
import React from 'react';
import '../App.css';
import './HomeSection.css';
import Button from '@mui/material-next/Button';
import { Link } from 'react-router-dom';

function HomeSection() {
    return (
        <>
        <div className='overlay'>
            <div className="homeSection">
                <video src="videos/video.mp4" autoPlay loop muted />
                <img id='slika1' src="/images/puskastrophy.png" />
                <div className="content">
                    <div className='textimg'>
                        <img className='textImage' src="/images/puskastext.png" />
                    </div>
                    <div className="nominees">
                        <Link className="dalink" to='/nominees'>
                            <Button className='Button1'><h1>VIEW NOMINEES</h1></Button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}
export default HomeSection;