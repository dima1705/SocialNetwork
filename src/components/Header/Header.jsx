import React from "react";
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.logo}>
                SNet
            </div>
            <div className={h.login}>
                <p>Sign In</p>
                <p>login</p>
            </div>
        </header>
    )

}

export default Header