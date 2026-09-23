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

// Same EmailJS account as the candidate site — this template is the one
// used for the "candidate passed all 5 days" completion report. Sending it
// is an admin-approved action from this site's Candidates tab (not
// automatic), so this is the only place that actually calls emailjs.send()
// with it. Not a secret — same trade-off as the Firebase config above.
export const EMAILJS_SERVICE_ID = "service_4pvav1n";
export const EMAILJS_COMPLETION_TEMPLATE_ID = "template_69jr97q";
export const EMAILJS_PUBLIC_KEY = "qEx9SNi8cHxY8jjxg";
export const MARKING_EMAIL_TO = "posinsideragent@gmail.com";
