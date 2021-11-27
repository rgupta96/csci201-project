import Property from './Property';

interface Listing {
    id: number,

    // This is a 'user' property in the db
    user: string,
    property: Property,
    dateListed: Date,
    numberContacted: number,
    active: boolean
}

export default Listing;