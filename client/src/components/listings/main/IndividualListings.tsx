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

    let description = "This home has a roof and a door and a few windows. There is space inside this home. This home is definitely a shelter for people who need a place to stay."
    let amenities : string[] = [
        'Pool',
        'Game Room',
        'Gym',
        'Sacrifice Area'
    ]

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
                    <IonCardSubtitle>{duration}</IonCardSubtitle>
                    <IonCardTitle>{address}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    {description}
                </IonCardContent>
                </IonCard>

                {/* <IonCard>
                    <IonItem>
                        <IonIcon icon={pin} slot="start" />
                        <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                        <IonButton fill="outline" slot="end">View</IonButton>
                    </IonItem>

                    <IonCardContent>
                        This is content, without any paragraph or header tags,
                        within an ion-cardContent element.
                    </IonCardContent>
                </IonCard> */}

                <IonCard>
                <IonItem href="#" className="ion-activated">
                    <IonIcon icon={wifi} slot="start" />
                    <IonLabel>{price}</IonLabel>
                </IonItem>

                <IonItem href="#">
                    <IonIcon icon={wine} slot="start" />
                    <IonLabel>{`ID ${id}`}</IonLabel>
                </IonItem>

                <IonItem className="ion-activated">
                    <IonIcon icon={warning} slot="start" />
                    <IonLabel>{`Amenities: ${amenities.join(', ')}`}</IonLabel>
                </IonItem>

                <IonItem>
                    <IonIcon icon={walk} slot="start" />
                    <IonLabel>Other stuff goes here</IonLabel>
                </IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default IndividualListing;