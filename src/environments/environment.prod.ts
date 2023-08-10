export const baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:";

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyDwYd4MFZMfUv79BuKtuL87zr7-mhGKh00",
    authDomain: "book-my-ground-2d99e.firebaseapp.com",
    projectId: "book-my-ground-2d99e",
    storageBucket: "book-my-ground-2d99e.appspot.com",
    messagingSenderId: "249124367216",
    appId: "1:249124367216:web:3c6738ac3d92f80ee5fdb5",
    measurementId: "G-YW4S8LN8V1"
  },
  
    // // API URLs Started ========
    signIn: `${baseURL}signInWithPassword?key=`,
    signUp: `${baseURL}signUp?key=`,
    forgetPassword: `${baseURL}sendOobCode?key=`,
    changePassword: `${baseURL}update?key=`,

};
