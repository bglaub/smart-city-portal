import * as express from 'express';
import * as nconf from 'nconf';

export default class Bootstrap {
    public expressApp;

    initExpressApp (){
        this.expressApp = express();
        
        this.mountRoutes();
        
        const port = process.env.PORT || nconf.get('port');
        
        this.expressApp.listen(port, (err) => {
            if (err) {
                return console.log(err);
            }

            return console.log(`server is listening on ${port}`);
        });
    }

    private mountRoutes (): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!'
            })
        });
        this.expressApp.use('/', router);
    }
}
