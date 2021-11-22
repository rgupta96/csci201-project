import React, {
    useState,
    FC
} from 'react';
import {
    IonBackButton, IonButtons, IonButton, IonHeader,
    IonToolbar, IonTitle, IonContent, IonPage,
    IonList, IonItem, IonLabel, IonInput, IonLoading
} from '@ionic/react';


// https://stackblitz.com/edit/ionic-react-demo?file=pages%2FLogin.jsx
const SelectAuthType : FC<any> = ({ track, history }) => {

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>();

    const goTo = (path : string) => {
        history.push(path, { direction: 'forward' });
    }


    const onLogin = () => {
        goTo('login');
    }

    const onSignUp = () => {

    }

    const onGuest = () => {

    }

    return (
        <IonPage>

            {/* The header at the top. Very cool! */}
            <IonHeader>
                <IonToolbar color="light">
                    <IonButtons slot="start">
                    <IonBackButton defaultHref={`/`} />
                    </IonButtons>
                    <IonTitle>Welcome to Subleasing App</IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* Where the rest of the content is I guess */}
            <IonContent className="form">
                <IonList>
                    <IonButton 
                        color={'primary'} 
                        expand="block" 
                        type="submit" 
                        onClick={onLogin}
                    >
                        Log in
                    </IonButton>
                    <IonButton 
                        color={'secondary'} 
                        expand="block" 
                        onClick={onSignUp}
                        type="submit"
                    >Sign Up</IonButton>
                    <IonButton 
                        color={'tertiary'} 
                        expand="block" 
                        onClick={onGuest}
                        type="submit"
                    >Continue As Guest</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default SelectAuthType;