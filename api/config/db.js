import 'dotenv/config'

import { connect } from 'mongoose'

async function connectDB() {

    // eslint-disable-next-line no-undef
    const DB_URL = process.env.MONGO_URL
    connect(DB_URL)
}

export default connectDB

