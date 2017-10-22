import * as path from 'path';

export default class DefaultConfiguration {
    
    public static getDefaultConfig () {
        return {
            appName: 'smart-city-portal-server',
            port: 7000,
            mode: 'development',
            staticDirs: [
                path.resolve(__dirname, '..', 'public', 'dist')
            ],
            paths: {
                root: path.resolve(__dirname, '..'),
                routeDir: path.resolve(__dirname, '..', 'routes')
            }
        };
    }
}