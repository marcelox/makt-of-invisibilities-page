module.exports = function (api) {
    api.cache(true);

    const presets = [
            require('./node_modules/@babel/preset-env'),
         ];

    return {
        presets,
    };
}
