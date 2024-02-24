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
const express  = require('express');
const functions = require('firebase-functions');
const path = require('path');
const packageInfo = require(path.join(__dirname, '..', 'package.json'));
const apiVersion = packageInfo.version

const app = express();

app.get('/', (req: any, res: any) => {
  return res.status(200).json({message: `Api-Version ${apiVersion}`});
})

exports.app = functions.https.onRequest(app);


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
