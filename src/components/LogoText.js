import React from 'react'
import {SIZES} from '../constants/'

const LogoText = (props) => {

    const styles = {
    fontFamily: 'Segoe UI Bold',
    color: '#232323',
    fontSize: props.fontSize * SIZES.scale
}
    return (
        <div style={styles}>
            Afriexporter
        </div>
    )
}

export default LogoText


