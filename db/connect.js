// db/connect.js 

import mongoose from 'mongoose'

// Retrieve the MongoDB connection URI from the environment variables
const MONGODB_URI = process.env.MONGODB_URI

// Throw an error if the MONGODB_URI environment variable is not defined
if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

// If there is no cached connection, create a new one
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

// Define a function to establish a new MongoDB connection using Mongoose
async function dbConnect() {

    // If there is a cached connection, return it
    if (cached.conn) {
        return cached.conn
    }

    // If there is no promise, create a new one and connect to the database
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }

    // Try to establish a connection to the database
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }

    // Return the established connection
    return cached.conn
}

// Export the dbConnect function
export default dbConnect
