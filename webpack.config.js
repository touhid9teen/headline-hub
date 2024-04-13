module.exports = {
    //...
    resolve: {
        fallback: {
            stream: require.resolve("stream-browserify"),
            timers: require.resolve("timers-browserify"),
        },
    },
};
