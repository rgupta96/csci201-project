import React from 'react';
import { useLocation } from "react-router-dom";
import { 
    IonContent, 
    IonHeader, 
    IonPage,  
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonButton,
    IonButtons,
    IonBackButton 
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const IndividualListing = () => {

    // Trust!
    const location : any = useLocation();

    const {
        address,
        duration,
        price,
        id
    } = location.state;

    return (
        <IonPage>
            <IonHeader>
            
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>{address}</IonTitle>
                </IonToolbar>
                
            </IonHeader>
            <IonContent>
                <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once in awhile,
                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
                </IonCard>

                <IonCard>
                <IonItem>
                    <IonIcon icon={pin} slot="start" />
                    <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                    <IonButton fill="outline" slot="end">View</IonButton>
                </IonItem>

                <IonCardContent>
                    This is content, without any paragraph or header tags,
                    within an ion-cardContent element.
            </IonCardContent>
                </IonCard>

                <IonCard>
                <IonItem href="#" className="ion-activated">
                    <IonIcon icon={wifi} slot="start" />
                    <IonLabel>Card Link Item 1 activated</IonLabel>
                </IonItem>

                <IonItem href="#">
                    <IonIcon icon={wine} slot="start" />
                    <IonLabel>Card Link Item 2</IonLabel>
                </IonItem>

                <IonItem className="ion-activated">
                    <IonIcon icon={warning} slot="start" />
                    <IonLabel>Card Button Item 1 activated</IonLabel>
                </IonItem>

                <IonItem>
                    <IonIcon icon={walk} slot="start" />
                    <IonLabel>Card Button Item 2</IonLabel>
                </IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default IndividualListing;