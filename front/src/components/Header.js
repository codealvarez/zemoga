import React from 'react'

export default function Header(props){
    return  <header>
            <div className="logo">
                Rule of Thumb
            </div>
            <nav>
                <ul>
                    <li><a href="#">Past trials</a></li>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Login/Sign up</a></li>
                </ul>
            </nav>
            <span>Search</span>
    </header>
}