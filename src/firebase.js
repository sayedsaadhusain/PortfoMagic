
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

    const firebaseConfig = {
      apiKey: "AIzaSyA4AnGSV6LX-ZvzZbM12cK6nzUojgcQitc",
      authDomain: "portfomagic.firebaseapp.com",
      projectId: "portfomagic",
      storageBucket: "portfomagic.firebasestorage.app",
      messagingSenderId: "457184772930",
      appId: "1:457184772930:web:d96c7ced7ff765e98dbedb",
      measurementId: "G-S5J9XDBGX9"
    };

    const app = initializeApp(firebaseConfig);
    let analytics;
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }
    
    export { app, analytics };
  