import React, {
    useState,
    FC
} from 'react';
import {
    IonBackButton, IonButtons, IonButton, IonHeader,
    IonToolbar, IonTitle, IonContent, IonPage,
    IonList, IonItem, IonLabel, IonInput, IonLoading
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { LoginProps } from './LoginRouter';
import {
    AccountType
} from '../../App'

// https://stackblitz.com/edit/ionic-react-demo?file=pages%2FLogin.jsx
const LoginPage : FC<LoginProps> = ({
    setIsAuthenticated,
    setAuthCredentials
} : LoginProps) => {

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    let history = useHistory();


    const submitLoginIn = () => {

        // If empty
        if (email === '' || password === '') {
            throw "Please fill out all fields"
        }

        // Check validity
        if (email.indexOf('@') === -1) {
            throw "Valid emails must contain an '@'"
        }

        // Retrieve data, then set credentials

        setAuthCredentials({
            // Change this
            type: AccountType.BUYER,
            credentials: {
                username: email,
                password: password
            }
        })
        setIsAuthenticated(true);
        history.push('/', { direction: 'forward' });
    }

    return (
        <IonPage>

            {/* The header at the top. Very cool! */}
            <IonHeader>
                <IonToolbar color="light">
                    <IonButtons slot="start">
                    <IonBackButton defaultHref={`/`} />
                    </IonButtons>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* Where the rest of the content is I guess */}
            <IonContent className="form">
            {/* <IonLoading isOpen={showLoading} message="Logging in..." onDidDismiss={() => setShowLoading(false)}/> */}
            {/* <form onSubmit={handleSubmit} method="post" ref={formRef} action=""> */}
                <IonList>
                    <IonItem>
                        <IonLabel position={'fixed'}>Email</IonLabel>
                        <IonInput type="email" value={email} onInput={(e : any) => setEmail(e.currentTarget.value)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position={'fixed'}>Password</IonLabel>
                        <IonInput
                            type="password"
                            value={password}
                            onInput={(e : any) => setPassword(e.currentTarget.value)}
                        />
                    </IonItem>
                <IonButton expand="block" type="submit" onClick="submitLoginIn()">Log in</IonButton>
                </IonList>
            {/* </form> */}
            {/* <div className="below-form">
                <a className="create" href="#/" onClick={(e) => { e.preventDefault(); goTo('/signup')}}>Create account instead</a>
                <a href="#/" onClick={(e) => { e.preventDefault(); goTo('/reset-password')}}>Forgot your password?</a>
            </div> */}
            </IonContent>
        </IonPage>
    )
}

export default LoginPage;