// Same Firebase project as the candidate site (coach-sql) — this admin
// site is a separate deployment (Firebase Hosting) so it never runs inside
// SEB, but it talks to the exact same Firestore database.
export const firebaseConfig = {
  apiKey: "AIzaSyDDGWqi5qrYqVL2TH4-sronUFWTfutM1Es",
  authDomain: "assistant-3d5d4.firebaseapp.com",
  projectId: "assistant-3d5d4",
  storageBucket: "assistant-3d5d4.firebasestorage.app",
  messagingSenderId: "149177527512",
  appId: "1:149177527512:web:ac0184b0d4339788f3bbad",
};

// Same Apps Script mailer as the candidate site (../coach-sql/mailer/) —
// used both for the marking-sheet email (candidate site) and, from this
// admin dashboard's Candidates tab, the admin-approved "completion report"
// send once a candidate has passed all 5 days.
export const MAILER_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
export const MAILER_SECRET = "PASTE_YOUR_SHARED_SECRET_HERE";
export const MARKING_EMAIL_TO = "posinsideragent@gmail.com";
