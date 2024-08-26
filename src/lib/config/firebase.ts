import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const currentUser = auth.currentUser;

export function getFirebaseAuth() {
    return auth;
}

export function subscribeToAuthChanges(callback: (user: any) => void) {
    return onAuthStateChanged(auth, callback);
} 

export async function getAuthToken(): Promise<string | null> {
    const user = getFirebaseAuth().currentUser;

    if (user) {
        try {
            const tokenResult = await user.getIdToken();
            return tokenResult;
        } catch (error) {
            console.error("Error getting Firebase Auth token:", error);
            return null;
        }
    }

    return null;
}
