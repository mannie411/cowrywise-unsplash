module.exports = {
    publicPath:
        process.env.NODE_ENV === "production"
            ? "/build/cowrywise-unsplash"
            : "/",
};
