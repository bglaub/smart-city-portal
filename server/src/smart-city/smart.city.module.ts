import { Module } from '@nestjs/common';
import { HelloWorldController } from './controllers/hello.world.controller';

@Module({
    controllers: [HelloWorldController],
    modules: [],
})

export class ApplicationModule {}