
var config = {
    db: {
        options: {
            db: {native_parser: true},
            server: {poolSize: 5},
        },
        uri: process.env.MONGO_URL || 'mongodb://localhost/chess'
    },
    porthttp: process.env.PORT || 3311,
    multicore: false,
    https: false,
    debug: true
}
module.exports = config;