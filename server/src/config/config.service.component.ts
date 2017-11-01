import * as path from 'path';
import * as nconf from 'nconf';

import DefaultServerConfiguration from './models/DefaultServerConfiguration';
import iServerConfiguration from './models/iServerConfiguration';
import Overrides from './models/custom.config';

export class ConfigServiceProvider {
    protected defaultConfig : iServerConfiguration;
    
    constructor(){
        this.loadConfig();
        this.finalize();
    }
    
    /**
     * We can essentially hide nconf internals from the application. Opens the door for replacement.
     */
    public get(path: string){
        return nconf.get(path);
    }
    
    protected loadConfig (){
        this.defaultConfig = DefaultServerConfiguration.getDefaultConfig();
    }
    
    protected finalize () {
        
        //1. Load command line and env vars
        nconf.argv().env();
        //2. Extend Custom JSON Config
        nconf.overrides(<iServerConfiguration> Overrides());
        
        //3. Static config (Lowest precedence)
        nconf.defaults(this.defaultConfig);
        return nconf;
    }
}

