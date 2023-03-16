import React from 'react';
import './diyidea.css';
const Diyidea = () => {
    return (
        <div className='app_diy'>
            <h1 className='gradient-text'>Some DIY Ideas From the world</h1>
            <div className="app_diy-Vedio">
                <iframe src='https://www.youtube.com/embed/dfcCYU3uCDI'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"

                />
                <iframe src='https://www.youtube.com/embed/vH1tw2GHT2E'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"
                />
                <iframe src='https://www.youtube.com/embed/byUMaCn7NiI'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"
                />
                <iframe src='https://www.youtube.com/embed/noZ7Znk26cE'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"
                />
                <iframe src='https://www.youtube.com/embed/iZV3N_q7SGY'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"
                />
                <iframe src='https://www.youtube.com/embed/1uTmli1HWBw'
                    frameborder='1px'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    width="500"
                    height="360"
                />
            </div>
            <p>All the videos come from https://youtube.com, you could find more related subjects from there.
                Enjoy your DIY adventure!</p>
        </div>
    )
}

export default Diyidea