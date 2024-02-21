import React from "react";

import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.profileLogo}> 
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-colorful-gradient-lighting-effect-e-commerce-promotion-banner-background-image_929719.jpg' />

            </div>
            <div className={c.descBlock}>
                ava + desc
            </div>

        </div>

    )
}

export default ProfileInfo