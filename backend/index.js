import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from "./config/db.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/users', userRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}
//
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/client/build')))
//
//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running')
//     })
// }

app.use(notFound)
app.use(errorHandler)

// const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// Static files
// app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
// app.get("/", function(req, res) {
//     res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
// });
//
// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, '../client','build','index.html'));
// });

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
