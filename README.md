# Google Mobile Web Specialist

Participant: Muslim Al Fatih\
Demo: [muslimalfatih-gdk.firebaseapp.com/](https://muslimalfatih-gdk.firebaseapp.com/)

### How to Deploy to Firebase

step by step to deploy project to firebase

we assume that you already have Node.js and npm installed,first step is install the Firebase CLI

```
npm install -g firebase-tools
```

And then connect your local machine to your firebase account and obtain access to your Firebase projects 

```
firebase login
```

next step is to initialize your site, run the following command

```
firebase init
```

The final step is to deploy your site:

```
firebase deploy
```