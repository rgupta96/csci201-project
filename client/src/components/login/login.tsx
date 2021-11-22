import React, {
    useState
} from 'react';
import {
    IonBackButton, IonButtons, IonButton, IonHeader,
    IonToolbar, IonTitle, IonContent, IonPage,
    IonList, IonItem, IonLabel, IonInput, IonLoading
} from '@ionic/react';


// https://stackblitz.com/edit/ionic-react-demo?file=pages%2FLogin.jsx
const LoginPage = () => {

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>();

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
                <IonButton expand="block" type="submit">Log in</IonButton>
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