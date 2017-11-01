import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../components/config.service.component';

@Controller('server-config')
export class ServerConfigController {
    constructor(private readonly configService: ConfigService) {}
    
    @Get()
    helloWorldRouteHandler() {
        return this.configService.get('routes:server-config');
    }
}