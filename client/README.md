# How to start the app
type 'ionic serve' into the CLI. You need to have the Ionic CLI installed first.
# User Flow
* Open app -> Login page (if unregistered)
* * Login page -> option to proceed as guest or register
* * * If choosing register -> profile creation page (are you a seller/buyer?)
* Then taken to main page (listings)
* Profile <-> Listings <-> Messages
* * Listings
* * * View Listings. Click on a listing to visit another page with specific details
* * * * Subleasers will be able to communicate with property owners from this page
* Sublettors have a different 'listings' page
* * They instead see a 'My Listings' page where they can manage their listed properties
* * * When the click on a listing, they can edit it or delete it.