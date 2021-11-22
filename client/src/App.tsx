import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {
    useState
} from 'react';

// Login stuff
import LoginPage from './components/login/login';
import LoginRouter from './components/login/LoginRouter';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

export enum AccountType {
    GUEST,
    BUYER,
    SELLER
}

interface Credentials {
    username: string,
    password: string
}

export interface AuthCredentials {
    type: AccountType,
    credentials?: Credentials
}

const App: React.FC = () => {

    // Rather than use something like redux which would make me very sad
    // We're going to chain a bunch of state hooks through various components :D
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [authCredentials, setAuthCredentials] = useState<AuthCredentials>({
        type: AccountType.GUEST
    })

    return (
        <IonApp>
            {
                isAuthenticated ?
                <AuthenticatedSetup/>
                :
                <LoginRouter 
                    setIsAuthenticated={setIsAuthenticated}
                    setAuthCredentials={setAuthCredentials}
                />
            }
        </IonApp>
    )

};

const AuthenticatedSetup = () => {
    return (
        <>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/profile">
                            <Tab1 />
                        </Route>
                        <Route exact path="/listings">
                            <Tab2 />
                        </Route>
                        <Route path="/messages">
                            <Tab3 />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/listings" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="profile" href="/profile">
                            <IonIcon icon={triangle} />
                            <IonLabel>Profile</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="listings" href="/listings">
                            <IonIcon icon={ellipse} />
                            <IonLabel>Listings</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="messages" href="/messages">
                            <IonIcon icon={square} />
                            <IonLabel>Messages</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </>
    )
}


export default App;
