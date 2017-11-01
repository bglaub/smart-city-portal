export default interface iServerConfiguration {
    appName?: string;
    port?: number;
    mode?: string;
    staticDirs?: Array<string>;
    paths?: any;
    routes?: any;
}