import * as path from 'path';
import * as nconf from 'nconf';

import DefaultServerConfiguration from './models/DefaultServerConfiguration';
import iServerConfiguration from './models/iServerConfiguration';
import Overrides from './custom.config';

export default class Loader {
    protected defaultConfig : iServerConfiguration;
    
    public loadAppConfig(){
        this.loadConfig();
        this.finalize();
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
        
        console.log('Displaying running process with config below:');
        console.log(nconf.get(null));
        return nconf;
    }
}
