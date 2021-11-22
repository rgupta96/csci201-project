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


const LoginRouter : FC = () => {

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/welcome" component={SelectAuthType}/>
                <Route exact path="/signup">
                    {/* <Tab2 /> */}
                </Route>
                <Route path="/login" component={LoginPage} />
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