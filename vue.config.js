module.exports = {
    filenameHashing: false,
    baseUrl: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
};