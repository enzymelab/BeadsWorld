import React from 'react'
import images from '../../constants/images';
import './BeadsType.css';
const BeadsType = () => {
    return (
        <div className='app_beadstype'>
            <div className="app_mizhu">
                <img src={images.mizhu} alt="SeedBeads" />
                <p>SeedBeads</p>
            </div>
            <div className="app_crystal" id='#beadstype'>
                <img src={images.crystal} alt="Crystal Beads" />
                <p>Crystal Beads</p>
            </div>
            <div className="app_glass">
                <img src={images.glass} alt="Glass Beads" />
                <p>Glass Beads</p>
            </div>
            <div className="app_metal">
                <img src={images.metal} alt="Metal Beads" />
                <p>Metal Beads</p>
            </div>
            <div className="app_pearl">
                <img src={images.pearl} alt="Pearl" />
                <p>Pearl</p>
            </div>
            <div className="app_wood">
                <img src={images.wood} alt="Wood Beads" />
                <p>Wood Beads</p>
            </div>
        </div>
    )
}

export default BeadsType