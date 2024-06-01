/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
const express = require('express');
const functions = require('firebase-functions');
const path = require('path');
const packageInfo = require(path.join(__dirname, '..', 'package.json'));
const apiVersion = packageInfo.version;
import {db} from './config/firebase';
// const admin = require('firebase-admin');

const app = express();

// import * as credential from './permissions/credential.json';
// const serviceAccount = require('./permissions/credentials.json');
// const serviceAccount2 = require('./credential.json');

// console.log(credential);

// admin.initializeApp({
// // eslint-disable-next-line max-len
//   credential: admin.credential.cert(credential),
// });

// const db = admin.firestore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/api/verbs/add', async (req: any, res: any) => {
  await db.collection('verbs/1L4FvESAaqe1MRy0xqb8/regulars').doc().create({
    past: req.body.past,
    present: req.body.present,
  });

  return res.status(200).json();
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/', (req: any, res: any) => {
  return res.status(200).json({message: `Api-Version dev V-${apiVersion}`});
});

exports.app = functions.https.onRequest(app);


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
