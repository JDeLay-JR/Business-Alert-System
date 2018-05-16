# Small Business Management Platform

## Mass Alert System

As of May 17th, 2018 this platform allows a user to sign up as a business and add clients to their address book. The user can view all of their client's information, update that information, or delete a client. Users can send individual clients a text message alert or they can broadcast an alert to their entire address book using Twilio.

## Future Plans

Looking forward I'd like to incorporate NodeMailer to allow users to mass email clients as well as text them. I'd also like to build out a calendar feature so business owners can see a snapshot of their schedule for the upcoming week or month. I'd also like to improve the styling of the site by adding animations, drag & drop (calendar), and general UI/UX improvements.

## Styling

The styling uses a combination of CSS Grid and Flexbox for content alignment.

## Testing & Development

```npm run test``` to run tests.

If tests need to be moved around the ```package.json``` file script needs to be edited accordingly. As of now it's pointing to the .spec files in sub-directories of the test folder.
