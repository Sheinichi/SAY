import React from 'react'
import headerStyles from '../styles/Header.module.css'


const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Welcome to SAY</span>
            </h1>
           <p className={headerStyles.description}>
             
                Keep up to date
           </p>
        </div>
    )
}

export default Header
