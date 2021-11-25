import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Listings from '../components/listings/main/Listings';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listings</IonTitle>
          </IonToolbar>
        </IonHeader>


        {/* <ExploreContainer name="Listings" /> */}
        <Listings />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
