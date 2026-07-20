
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import {ref,push,set,get,child,update,remove,getDatabase} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBpUswAC6EDDACy-yLZwPzHSY6PA05cbys",
    authDomain: "mycity-wlul.firebaseapp.com",
    databaseURL: "https://mycity-wlul-default-rtdb.firebaseio.com",
    projectId: "mycity-wlul",
    storageBucket: "mycity-wlul.appspot.com",
    messagingSenderId: "1046646181763",
    appId: "1:1046646181763:web:aed272f74d475c4e6130b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  export { database,ref,push,set,get,child,update,remove,getDatabase };