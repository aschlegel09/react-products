module.exports = {
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    facebook: {
        appId: process.env.FACEBOOK_APP_ID,
        appSecret: process.env.fbSecret
    },
    mongodb: {
         dbURI: process.env.MONGODB_URI
     },
    session: {
        cookieKey: process.env.COOKIEKEY
    }
 }
 
 