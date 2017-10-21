import Loader from './Config/Loader'
import Bootstrap from './Bootstrap/Bootstrap'

let configLoader = new Loader().loadAppConfig();
let app = new Bootstrap().initExpressApp();