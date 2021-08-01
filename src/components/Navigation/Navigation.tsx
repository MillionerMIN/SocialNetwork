import React from 'react';
import ReactLogo from './icons/Logo.png'

//import components
import Account from "../Account/Account";
import Item from "./item/Item";
import Search from "./search/Search";

//import css
import s from './Navigation.module.scss';
import chats from './item/icons/chats.svg';
import posts from './item/icons/posts.svg';
import music from './item/icons/music.svg';
import setting from './item/icons/setting.svg';
import users from './item/icons/users.svg';
import other from './item/icons/other.svg';



function Navigation() {
    return (
            <nav className={s.nav}>
                
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <img className={s.logo} src={ReactLogo} alt='logo' />
                        <div className={s.container}>
                            <div className={s.wrapperItems}>
                            <Item title={'Posts'} link={'../../Posts/Posts.tsx'} icon={posts} />
                            <Item title={'Chats'} link={'../../Chats/Chats.tsx'} icon={chats} />
                            <Item title={'news'} link={'../../News/News.tsx'} icon={music} />
                            <Item title={'users'} link={'../../Users/Users.tsx'} icon={users}/>
                            <Item title={'setting'} link={'../../Setting/Setting.tsx'} icon={setting} />
                            </div>
                            <Search />
                            <Account />
                        </div>
                    <Item title={'other'} link={'../../Other/Other.tsx'} icon={other} />
                    </div>
                </div>
            </nav>
    );
}


export default Navigation;