import React from 'react';
import ReactLogo from './icons/Logo.png'
import ReactPosts from './item/icons/posts.svg'

//import components
import Account from "../Account/Account";
import Item from "./item/Item";
import Search from "./search/Search";

//import css
import s from './Navigation.module.scss';



function Navigation() {
    return (
            <nav className={s.nav}>
                
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <img className={s.logo} src={ReactLogo} alt='logo' />
                        <div className={s.container}>
                            <div className={s.wrapperItems}>
                                <Item title={'Posts'} link={'../../Posts/Posts.tsx'} />
                                <Item title={'Chats'} link={'../../Chats/Chats.tsx'} />
                                <Item title={'news'} link={'../../News/News.tsx'} />
                                <Item title={'users'} link={'../../Users/Users.tsx'} />
                                <Item title={'setting'} link={'../../Setting/Setting.tsx'} />
                            </div>
                            <Search />
                            <Account />
                        </div>
                        <Item title={'other'} link={'../../Other/Other.tsx'} />
                    </div>
                </div>
            </nav>
    );
}


export default Navigation;