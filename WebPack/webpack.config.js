const path = require('path');
module.exports = {
    mode: "development", // could be "production" as well
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
const { join, resolve } = require('path');
module.exports = () => {
    return {
        resolve: {
            alias: {
                '@missionlog': resolve(
                    join(__dirname, '..', 'node_modules', 'missionlog')
                )
            }
        }
    };
}