import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
console.log("FIREBASE_PROJECT_ID", process.env.FIREBASE_ACCOUNT_PROJECT_ID);
const serviceAccount = {
  projectId: process.env.FIREBASE_ACCOUNT_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ACCOUNT_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});




export default admin;
