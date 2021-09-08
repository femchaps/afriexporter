import React from 'react'
import { Link} from "react-router-dom";
import LogoText from './LogoText'
import {SIZES} from '../constants/'

const GetStartedMenu = () => {
    return (
        <div style={ styles.getStartedMenu}>
            <LogoText fontSize={20} />
            <div style={styles.menuItems}><Link to="/about" style={{textDecoration: 'none'}}>About</Link></div>
            <div style={styles.menuItems}><Link to="/services" style={{textDecoration: 'none'}}>Services</Link></div>
        </div>
    )
}

export default GetStartedMenu

const styles = {
    getStartedMenu: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 53 * SIZES.scale,
        
    },
    menuItems: {
        fontSize: 18 * SIZES.scale,
        color: '#232323',
        marginLeft: 40 * SIZES.scale,
        
    }
}
