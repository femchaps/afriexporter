import React from 'react'
import LogoText from './LogoText'

const GetStartedMenu = () => {
    return (
        <div style={styles.getStartedMenu}>
            <LogoText fontSize={20} />
            <div style={styles.menuItems}>About</div>
            <div style={styles.menuItems}>Services</div>
        </div>
    )
}

export default GetStartedMenu

const styles = {
    getStartedMenu: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 53
    },
    menuItems: {
        fontSize: 18,
        color: '#232323',
        marginLeft: 40
    }
}
