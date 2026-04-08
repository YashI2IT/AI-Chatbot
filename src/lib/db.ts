import { connect } from "mongoose"

const mongo_Url = process.env.MONGODB_URL
if (!mongo_Url) {
    console.log("mongodb url not found")
}
let cache = global.mongoose
if (!cache) {
    cache = global.mongoose = { conn: null, promise: null }
}

const connectDb = async () => {
    if (cache.conn) {
        return cache.conn
    }
    if (!cache.promise) {
        const options = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4, // Force IPv4
        }
        cache.promise = connect(mongo_Url!, options).then((c) => c.connection)
    }

    try {
        cache.conn = await cache.promise
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection error:", error)
        cache.promise = null
        throw error
    }

    return cache.conn
}

export default connectDb