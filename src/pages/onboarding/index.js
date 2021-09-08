import React, { createContext, useContext, useEffect, useRef, useState }  from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Onboarding1 from './Onboarding1';
import homeImage from '../../assets/images/homeImage.png'
import GetStartedMenu from '../../components/GetStartedMenu';
import GetStarted from './GetStarted';
import CreatePassword from './CreatePassword';
import About from './About';
import Services from './Services';
import Login from './Login'
import UserType from './UserType'
import {SIZES, COLORS} from '../../constants/'

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
                <div  className="w3-half" style={{paddingRight: 72 * SIZES.scale}}>
                    <GetStartedMenu />
                    <div style={{}}>
                        <Switch>
                            <Route path="/get-started" component={GetStarted} />
                            <Route path="/about" component={About} />
                            <Route path="/services" component={Services} />
                            <Route path="/create-password" component={CreatePassword} />
                            <Route path="/login" component={Login} />
                            <Route path="/user-type" component={UserType} />
                            <Route path="*" component={Onboarding1} />
                            
                        </Switch>
                    </div>
                </div>
                
                <div className="w3-half">
                    <img src={homeImage} style={styles.homeImage} />
                </div>
                
            </div>
        </Router>

    )
}

export default index


const styles = {
    Page: {
        paddingLeft:72 * SIZES.scale,
        backgroundColor: COLORS.background
    },
    homeImage: {
        width: 710 * SIZES.scale,
        height: 1024 * SIZES.scale
    }
}
