import React from 'react'
import { Link } from "react-router-dom";
import mapBase from '../../assets/images/mapbase.png'
import styled from 'styled-components'


const Onboarding1 = () => {
    return (
        <div style={styles.container}>
            <p style={styles.headerText}>Header Text</p>
            <p style={styles.description}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <Link to="/get-started">
                <Button>Get started</Button>
            </Link>
        </div>
    )
}

export default Onboarding1

const styles = {
    container: {
        color: '#232323',
        backgroundImage: 'url(${mapBase})',
        paddingTop: 200,
    },
    headerText: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18,
        marginTop: -60
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