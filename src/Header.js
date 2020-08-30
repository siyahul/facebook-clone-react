import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar,IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="data:image/png;base64,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" alt=""></img>
                <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text"></input>
                </div>
            </div>
            <div className="header__centre">
                <div className="header__options header__options--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Siyahul Haq</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
