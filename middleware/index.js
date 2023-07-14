// Part 1.3 declare and require BCRYPT, JWT & dotenv
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Part 1.4 add SALT ROUNDS & APP_SECRET
// then add to your .env (12 rounds is standard)
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

// Part 1.5 -- HASH your PASSWORDsss
const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    // ^^ creates a hashed password and ecrypts it 12 times
    return hashedPassword
}

// Part 1.6 -- COMPARE your PASSWORD 
const comparePassword = async (storedPassword, password) => {
    // ^^ compares the two passwords for a match
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    // ^^ returns true if the passwords match, false if they dont
    return passwordMatch
}

// Part 1.7 -- CREATE a JWT
const createToken = (payload) => {
    let token = jwt.sign(payload, APP_SECRET)
    // ^^ generates the Token and encrypts it and returns
    // the Token when the process finishes
    return token
}

// Part 1.8 -- VERIFY the JWT
const verifyToken = (req, res, next) => {
    const { token } = res.locals
    // ^^ gets the Token stored in the Request LifeCycle
    try {
        let payload = jwt.verify(token, APP_SECRET)
        // ^^ verifies the Token is legit
        if (payload) {
            res.locals.payload = payload
            // ^^ passes decoded payload to next function
            // and calls the next function if Token is valid
            return next()
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'Verify Token Error'})
        // ^^ basically BOILERPLATE for ERROR Call - Use often
    }
}

// Part 1.9 -- READING a JWT (using stripToken)
const stripToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1]
        // ^^ splits the Token's Value per Space and accesses Index
        if (token) {
            res.locals.token = token
            // ^^ IF the Token exists we add it to REQUEST LifeCycle State
            return next()
        }
        res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'Strip Token Error'})
    }
}

// Part 1.10 -- EXPORT all your AUTH FUNCTIONS
module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword
}