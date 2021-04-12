import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
  // 로컬 호스트에서 아날리틱스를 실행하면 오류가 나서 추가
  if (window.location.hostname !== "localhost") {
    fb.analytics();
  }
}

export const firebase = fb;
export const auth = fb.auth();
export const db = fb.firestore();
