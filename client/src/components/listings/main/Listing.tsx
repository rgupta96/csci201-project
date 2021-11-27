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
import { useHistory } from 'react-router-dom';


interface ListingProps {
    id: number,
    address: string,
    price: number,
    duration: string
}

const Listing : FC<ListingProps> = ({
    id,
    address,
    price,
    duration
} : ListingProps) => {

    let history = useHistory();


    const viewListing = () => {
        history.push({
            pathname: `/listings/${id}`,
            state: {
                id, address, price, duration
            }
        });
    }

    return (
        <div style={{
            height: '120px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            cursor: 'pointer'
        }}
        onClick={() => viewListing()}
        >
            <div style={{
                height: '100%',
                aspectRatio: '1',
                padding: '10px'
            }}>
                <div style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'white',
                    borderRadius: '10px'
                }}>

                </div>
            </div>
            <div style={{
                width: '100%',
                flexDirection: 'column',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'start'
            }}>
                {/* Address */}
                <div style={{
                    fontWeight: 'bold',
                    fontSize: '30px'
                }}>
                    {address}
                </div>
                {/* Duration */}
                <div style={{
                    fontSize: '25px'
                }}>
                    {duration}
                </div>
            </div>
        </div>
    )
}

export default Listing;