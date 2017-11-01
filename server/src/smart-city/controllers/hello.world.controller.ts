import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
    @Get()
    helloWorldRouteHandler() {
        return {
            message: 'Hello NestJS World!'
        };
    }
}