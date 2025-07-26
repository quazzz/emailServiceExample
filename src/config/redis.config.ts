import { BullModuleOptions, SharedBullConfigurationFactory } from "@nestjs/bull";
export class RedisConfigService implements SharedBullConfigurationFactory {
    createSharedConfiguration(): BullModuleOptions {
        return {
            redis: {
                host: process.env.REDIS_HOST || 'localhost',
                port: Number(process.env.REDIS_PORT) || 6379
            }
        }
    }
}
