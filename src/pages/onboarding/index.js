import React, { createContext, useContext, useEffect, useRef, useState }  from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Onboarding1 from './Onboarding1';
import homeImage from '../../assets/images/homeImage.png'
import GetStartedMenu from '../../components/GetStartedMenu';
import GetStarted from './GetStarted';
import CreatePassword from './CreatePassword';
import Login from './Login'

const index = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location]);

    return (
        <Router >
            <div className="w3-row" style={styles.Page}>
                <div  className="w3-half" style={{paddingRight: 72}}>
                    <GetStartedMenu />
                        <Switch>
                            <Route path="/get-started" component={GetStarted} />
                            <Route path="/create-password" component={CreatePassword} />
                            <Route path="/login" component={Login} />
                            <Route path="*" component={Onboarding1} />
                            
                        </Switch>
                        
                </div>
                
                <div className="w3-half">
                    <img src={homeImage} />
                </div>
                
            </div>
        </Router>

    )
}

export default index


const styles = {
    Page: {
        paddingLeft:72,
    }
}
