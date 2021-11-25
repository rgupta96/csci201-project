import React, {
    FC,
    useState
} from 'react';
import { 
    IonButton,
    IonContent, 
    IonHeader,
    IonInfiniteScroll, 
    IonInfiniteScrollContent, 
    IonItem,
    IonLabel,
    IonList,  
    IonPage, 
    IonTitle, 
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';

interface ListingProps {
    address: string,
    price: number,
    duration: string
}

const Listings : FC<ListingProps> = ({
    address,
    price,
    duration
} : ListingProps) => {

    return (
        <div>

        </div>
    )
}

export default Listings;