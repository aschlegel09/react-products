'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function() {
    
// Connect to the Mongo DB
mongoose.createConnection(process.env.MONGOLAB_URI || "mongodb://localhost:27017/userList"), { useNewUrlParser: true };

let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

    const db = mongoose.createConnection('mongodb://localhost/userList');

    const UserSchema = new Schema({
        email: {
            type: String, required: true,
            trim: true, unique: true,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    facebookProvider: {
        type: {
            id: String,
            token: String,
        },
        select: false
    },
    googleProvider: {
        type: {
            id: String,
            token: String
        },
        select: false
    }
    });

    UserSchema.set('toJSON', {getters: true, virtuals: true});

    UserSchema.statics.upserFbUser = function(accessToken, refreshToken, profile, cb) {
        const that = this;
        return this.findOne({
            'facebookProvider.id': profile.id
        }, function(err, user) {
            // no user found, create new one
            if(!user) {
                const newUser = new that({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    facebookProvider: {
                        id: profile.id,
                        token: accessToken
                    }
                });
                newUser.save(function(error, savedUser) {
                    if(error) {
                        console.log(error);
                    }
                    return cb(error, savedUser);
                });
            } else {
                return cb(err, user);
            }
        });
    };

    UserSchema.statics.upsertGoogleUser = function(accessToken, refreshToken, profile, cb) {
        const that = this;
        return this.findOne({
            'googleProvider.id': profile.id
        }, function(err, user) {
            // no user found, create new one
            if(!user) {
                const newUser = new that({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    googleProvider: {
                        id: profile.id,
                        token: accessToken
                    }
                });

                newUser.save(function(error, savedUser) {
                    if(error) {
                        console.log(error);
                    }
                    return cb(error, savedUser);
                });
            } else {
                return cb(err, user);
            }
        });
    };

    mongoose.model('User', UserSchema);

    return db;
};