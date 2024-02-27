import React from 'react'
import image5 from '../images/img5.png'

export const Header = () => {
    return (
        <nav>
            <ul>
                <li><img src={image5} alt="search" width={20} height={20}/><input type="text" /></li>
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
            </ul>
        </nav>
    )
}
