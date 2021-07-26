import React, {useState} from 'react'
import { Link } from "react-router-dom";
import leftArrow from '../../assets/icons/left_arrow.png'
import LogoText from '../../components/LogoText'
import Button from '../../components/CustomButton'

const GetStarted = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <div style={styles.container}>
            <div>
                <Link to='/*' style={styles.link}><img width='18px' height='15px' src={leftArrow} />&nbsp;Go back</Link>
                <div style={{marginTop: 30}}>&nbsp;</div>
                <LogoText fontSize={45} />
                <div style={{fontSize: 22, marginTop:10}}>Let's get to meet you</div>
                
                <input 
                    style={styles.textInput} 
                    placeholder="First Name" 
                    onChange={(e)=> {
                        setFirstName(e.target.value)
                    }}
                />
                <input 
                    style={styles.textInput} 
                    placeholder="Last Name" 
                    onChange={(e)=> {
                        setLastName(e.target.value)
                    }}
                />
                <input 
                    type='email'
                    style={styles.textInput} 
                    placeholder="Email Address" 
                    onChange={(e)=> {
                        setEmail(e.target.value)
                    }}
                />
                <input 
                    type='phone'
                    style={styles.textInput} 
                    placeholder="Phone Number" 
                    onChange={(e)=> {
                        setPhone(e.target.value)
                    }}
                />
                <Link to="/create-password">
                    <Button style={{padding: '16px 142px', marginTop: 83}}>Proceed</Button>
                </Link>
                <p style={{paddingLeft: 50}}>If you have an account,&nbsp; 
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <strong>Log In</strong>
                    </Link>
                </p>
                
            </div>
            
            
        </div>
    )
}

export default GetStarted

const styles = {
    container: {
        display: 'flex',
        color: '#232323',
        paddingTop: 100,
    },
    link: {
        textDecoration: 'none',
        marginBottom: 50
    },
    textInput: {
        border: 'none',
        borderBottom: '1px solid #BDBDBD' ,
        width: 343,
        marginTop: 43

    },
}
