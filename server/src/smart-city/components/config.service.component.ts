import { Component } from '@nestjs/common';
import { ConfigServiceProvider } from "../../config/config.service.component"

/**
 * This serves as the IoC wrapper for the server configuration service. I'm not a huge fan of this currently.
 *
 * TODO: Look for way to inject config service instance into module during bootstrap phase to avoid this extension.
 */
@Component()
export class ConfigService extends ConfigServiceProvider{
}