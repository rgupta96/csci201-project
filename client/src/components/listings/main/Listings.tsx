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

const Listings : FC = () => {

    const [data, setData] = useState<string[]>([]);

    const pushData = () => {
        const max = data.length + 20;
        const min = max - 20;
        const newData = [];
        for (let i = min; i < max; i++) {
          newData.push('Item' + i);
        }
    
        setData([
          ...data,
          ...newData
        ]);
      }

    const loadData = (ev: any) => {
        setTimeout(() => {
          pushData();
          console.log('Loaded data');
          ev.target.complete();
          if (data.length == 1000) {
            // setInfiniteDisabled(true);
          }
        }, 500);
    }  

    useIonViewWillEnter(() => {
        pushData();
    });


    return (
        <div>

        <IonList>
          {data.map((item, index) => {
            return (
              <IonItem key={index}>
                {/* <IonLabel>{item}</IonLabel> */}
                {item}
              </IonItem>
            )
          })}
        </IonList>

        <IonInfiniteScroll
          onIonInfinite={loadData}
          threshold="100px"
          disabled={false}
        >
          <IonInfiniteScrollContent
            loadingSpinner="bubbles"
            loadingText="Loading more data..."
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>

        </div>
    )
}

export default Listings;