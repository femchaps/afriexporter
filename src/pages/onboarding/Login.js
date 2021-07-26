import React, {useState} from 'react'
import { Link } from "react-router-dom";
import leftArrow from '../../assets/icons/left_arrow.png'
import LogoText from '../../components/LogoText'
import Button from '../../components/CustomButton'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div style={styles.container}>
            <div>
                <Link to='/get-started' style={styles.link}><img width='18px' height='15px' src={leftArrow} />&nbsp;Go back</Link>
                <div style={{marginTop: 30}}>&nbsp;</div>
                <LogoText fontSize={45} />
                <div style={{fontSize: 22, marginTop:10}}>Login to continue</div>
                
                <input 
                    style={styles.textInput} 
                    type='email'
                    placeholder="Email address" 
                    onChange={(e)=> {
                        setEmail(e.target.value)
                    }}
                />
                <input 
                    style={styles.textInput} 
                    placeholder="Enter password" 
                    onChange={(e)=> {
                        setPassword(e.target.value)
                    }}
                />
                <Button style={{padding: '16px 142px', marginTop: 60}}>Submit</Button>
                
            </div>
            
            
        </div>
    )
}

export default Login

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
