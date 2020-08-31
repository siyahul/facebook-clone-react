import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fcok1-1.fna.fbcdn.net/v/t1.0-9/75407813_3091412370977438_3580795328308598472_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=Fkuv5cnBR6EAX-U3XEF&_nc_ht=scontent.fcok1-1.fna&oh=483e478f135e4bd1a6c39e148f563e19&oe=5F738E56" title="Siyahul Haq"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID 19 Information Centre"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
        </div>
    )
}

export default Sidebar
