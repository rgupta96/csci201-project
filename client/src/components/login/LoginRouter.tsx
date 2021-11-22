import React, {
    FC, useState
} from 'react';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import SelectAuthType from './SelectAuthType';
import LoginPage from './login';
import {
    AuthCredentials
} from '../../App';
import SignUpPage from './SignUpPage';

export interface LoginProps {
    setIsAuthenticated: (b : boolean) => void,
    setAuthCredentials: (c : AuthCredentials) => void
}

const LoginRouter : FC<LoginProps> = ({
    setIsAuthenticated,
    setAuthCredentials
} : LoginProps) => {

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/welcome">
                    <SelectAuthType 
                        setIsAuthenticated={setIsAuthenticated}
                        setAuthCredentials={setAuthCredentials}
                    />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage 
                        setIsAuthenticated={setIsAuthenticated}
                        setAuthCredentials={setAuthCredentials}
                    />
                </Route>
                <Route path="/login">
                    <LoginPage 
                        setIsAuthenticated={setIsAuthenticated}
                        setAuthCredentials={setAuthCredentials}
                    />
                </Route>
                <Route path="/guest">
                    {/* <Tab3 /> */}
                </Route>
                <Route exact path="/">
                    <Redirect to="/welcome" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    )
}

export default LoginRouter;