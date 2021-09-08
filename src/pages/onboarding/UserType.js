import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import leftArrow from '../../assets/icons/left_arrow.png'
import LogoText from '../../components/LogoText'
import Button from '../../components/CustomButton'
import { COLORS, SIZES } from '../../constants';

const UserType = () => {
    const [userType, setUserType] = useState("")

    let types = [
        {value: "Exporter/Supplier"},
        {value: "Importer/Buyer"},
        {value: "Freight Forwarder"},
        {value: "Trainer"}
    ]

    return (
        <div style={styles.container}>
            <div style={{paddingLeft: 118 * SIZES.scale, paddingRight: 100 * SIZES.scale}}>
                <Link to='/create-password' style={styles.link}><img width='18px' height='15px' src={leftArrow} />&nbsp;Go back</Link>
                <div style={{marginTop: 30}}>&nbsp;</div>
                <div style={{fontSize: 24 * SIZES.scale, marginTop:10, fontFamily: 'Segoe UI Bold'}}>What would you be doing on Afriexporter</div>
                <div style={{paddingTop: 16}}>
                    {
                        types.map(type => (
                            <div style={styles.radioBG} className="w3-card w3-round">
                                <input
                                type="radio"
                                className="w3-radio"
                                value="exporter"
                                name="user-type"
                                onChange={()=>setUserType(type.value)}
                                />
                                <label style={styles.label}>{type.value}</label>
                            </div>
                        ))
                    }

                </div>
                
                <Link to="/create-password">
                    <Button style={{padding: '16px 142px', marginTop: 83}}>Submit</Button>
                </Link>
                
            </div>
            
            
        </div>
    )
}

export default UserType

const styles = {
    container: {
        flexDirection: 'row',
        color: '#232323',
        paddingTop: 100 * SIZES.scale,
    },
    link: {
        textDecoration: 'none',
        marginBottom: 50 * SIZES.scale,
        fontFamily: 'Segoe UI Bold'
    },
    textInput: {
        border: 'none',
        borderBottom: '1px solid #BDBDBD' ,
        width: 343 * SIZES.scale,
        marginTop: 43 * SIZES.scale

    },
    radioBG: {
        width: 342 * SIZES.scale,
        height: 60 * SIZES.scale,
        backgroundColor: COLORS.normal_white,
        padding: 12,
        marginTop: 24 * SIZES.scale
    },

    label: {
        fontSize: 18 * SIZES.scale,
        lineHeight: 0.36,
    }
}
