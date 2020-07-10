module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI || 'mongodb+srv://instaclonedb.v2zyv.mongodb.net/instaclonedb',
    secret: process.env.SECRET || 'Im a fucking crypter machine'
}