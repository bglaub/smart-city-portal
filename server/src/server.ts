import * as bodyParser from 'body-parser';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './smart-city/smart.city.module';
import { ConfigServiceProvider } from './config/config.service.component';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    
    const ConfigService = new ConfigServiceProvider();
    console.log('Displaying running process with config below:');
    console.log(ConfigService.get(null));
        
    app.use(bodyParser.json());
    await app.listen(ConfigService.get('port'));
}

bootstrap();