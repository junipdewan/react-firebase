# React-Firebase 
Firebase Integration with React (Basic signup/login flow)
<p align="center">
  <img width="600" height="300" src="./static/react-firebase.jpg">
</p>
<p align="center">
  <a href="https://github.com/kamranahmedse/githunt">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg" alt="contributions" />
  </a>
  <a href="https://github.com/junipdewan/githunt/blob/master/license.md">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="license-mit" />
  </a>
</p>

# Setup

## Firebase Configuration

1. Signin to Firebase Console.
  [Sign into Firebase ](https://console.firebase.google.com/) using your Google account.

2. [Create a Firebase project](https://firebase.google.com/docs/web/setup)
3. Get the firebase config object


## Project Configuration

1. Install Dependencies 

```javascript
npm install
```
2. Create a ENV file in the root directory & Add your firebase project config

```sh
FIREBASE_API_KEY=''
FIREBASE_AUTH_DOMAIN=""
FIREBASE_DATABASE_URL=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET="" 
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
FIREBASE_MESUREMENT_ID=""
```
3. Run locally

```javascript
npm run dev
```


## LICENSE

[MIT]() junipdewan


## ToDo

- [ ] Better UI for signup/register

## 