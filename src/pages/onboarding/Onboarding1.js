import React from 'react'
import { Link } from "react-router-dom";
import mapBase from '../../assets/images/mapbase.png'
import styled from 'styled-components'
import { SIZES } from '../../constants';


const Onboarding1 = () => {
    return (
        <div style={styles.container}>
            <p style={styles.headerText}>Welcome to Afriexporter</p>
            <p style={styles.description}>...trade, connect and learn</p>
            <div className="w3-row" style={{marginTop: 40 * SIZES.scale}}>
                <div className="w3-third">
                    <Link to="/get-started">
                        <Button>Get started</Button>
                    </Link>
                </div>
                <div className="w3-twothird" style={{marginTop: 15}}>I have an account</div>
            </div>
            
        </div>
    )
}

export default Onboarding1

const styles = {
    container: {
        color: '#232323',
        backgroundImage: 'url(${mapBase})',
        paddingTop: 200 * SIZES.scale,
    },
    headerText: {
        fontSize: 60 * SIZES.scale,
        fontFamily: 'Segoe UI Bold'
    },
    description: {
        fontSize: 18 * SIZES.scale,
        marginTop: -60 * SIZES.scale
    }
    
}

const Button = styled.button`
    background-color: #232323;
    color: white;
    border-radius: 6px;
    padding: 16px 32px;
    font-size: 16px;
    border: 1px solid #232323;
    cursor: pointer;`
;