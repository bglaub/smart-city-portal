import { Module } from '@nestjs/common';

//Controllers
import { ServerConfigController } from './controllers/server.config.controller';

//Components
import { ConfigService } from './components/config.service.component';

@Module({
    controllers: [ServerConfigController],
    components: [ConfigService],
    modules: [],
})
export class ApplicationModule {}