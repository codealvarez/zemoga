import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function General(){
    return (
        <>
            <header>
                <div className="logo">
                    Rule of Thumb.
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="#">Past trials</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">LogIn/SignUp</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
    
}