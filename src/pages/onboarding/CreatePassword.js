import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Button from '../../components/CustomButton'
import { usePasswordValidation } from '../../hooks/usePasswordValidation';
import SuccessIcon from '../../assets/icons/success.png'
import ErrorIcon from '../../assets/icons/errorIcon.png'
import {SIZES, COLORS} from '../../constants/'
import leftArrow from '../../assets/icons/left_arrow.png'
import LogoText from '../../components/LogoText'
//https://medium.com/@steven_creates/creating-a-custom-react-hook-for-password-validation-46fc421c16ee

const CreatePassword = () => {
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: ""
        })

    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
        ] = usePasswordValidation({
            firstPassword: password.firstPassword,
            secondPassword: password.secondPassword,
            requiredLength: 6, //you can always change this to specified lenght 
            numberValidation: false,
            specialcharacterValidation: false,
        });

    return (
        <div style={styles.container}>
            <div style={{paddingLeft: 118 * SIZES.scale}}>
                <Link to='/get-started' style={styles.link}><img width='18px' height='15px' src={leftArrow} />&nbsp;Go back</Link>
                <div style={{marginTop: 30 * SIZES.scale}}>&nbsp;</div>
                <LogoText fontSize={45 * SIZES.scale} />
                <div style={{fontSize: 22 * SIZES.scale, marginTop:10 * SIZES.scale, fontFamily: 'Segoe UI Bold'}}>Create your password</div>
                <div className="w3-row" style={{paddingTop: 43 * SIZES.scale}}>
                    <input 
                    className='w3-col l11 m11 s11'
                        type='password'
                        style={styles.textInput} 
                        placeholder="Enter Password" 
                        onChange={(e)=> {
                            setPassword({...password, firstPassword: e.target.value})
                        }}
                    />
                    <div className='w3-col l1 m1 s1' style={{marginLeft:-26}}>
                        { upperCase && lowerCase && validLength ?
                            <img src={SuccessIcon} width='17px' height = '17px' /> : 
                            <img src={ErrorIcon} width='17px' height = '17px' />
                        }
                    </div>
                </div>
                <div className="w3-row" style={{paddingTop: 43 * SIZES.scale}}>
                    <input 
                    className='w3-col l11 m11 s11'
                        type='password'
                        style={styles.textInput} 
                        placeholder="Enter Password again" 
                        onChange={(e)=> {
                            setPassword({...password, secondPassword: e.target.value})
                        }}
                    />
                    <div className='w3-col l1 m1 s1' style={{marginLeft:-26 * SIZES.scale}}>
                        { upperCase && lowerCase && validLength && match ?
                            <img src={SuccessIcon} width='17px' height = '17px' /> : 
                            <img src={ErrorIcon} width='17px' height = '17px' />
                        }
                    </div>
                </div>
                    <div style={{color: COLORS.secondary}}>
                        <p style={{marginTop: 25 }}>Password should be: </p>
                        <div className="w3-row">
                            <div className='w3-col l11 m11 s11'>At least 6 characters long</div>
                            <div className='w3-col l1 m1 s1'>
                                { validLength ?
                                    <img src={SuccessIcon} width='17px' height = '17px' /> : 
                                    <img src={ErrorIcon} width='17px' height = '17px' />
                                }
                            </div>
                        </div>
                        <div className="w3-row">
                            <div className='w3-col l11 m11 s11'>A mixture of UPPER and lower cases</div>
                            <div className='w3-col l1 m1 s1'>
                                { upperCase && lowerCase ?
                                    <img src={SuccessIcon} width='17px' height = '17px' /> : 
                                    <img src={ErrorIcon} width='17px' height = '17px' />
                                }
                            </div>
                        </div>
                    </div>
                    
                
                <Link to="/user-type">
                    <Button style={{padding: '16px 142px', marginTop: 151 * SIZES.scale}}>Submit</Button>
                </Link>
                
            </div>
            
            
        </div>
    )
}

export default CreatePassword


const styles = {
    container: {
        display: 'flex',
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
        width: 340 * SIZES.scale,
        backgroundColor: 'transparent'
    },
}
