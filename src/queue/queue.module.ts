import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { RedisConfigService } from 'src/config/redis.config';
import { EMAIL_QUEUE } from './queue.constants';
@Module({
    imports: [
        BullModule.forRootAsync({
            useClass: RedisConfigService,
        }),
        BullModule.registerQueue({
            name: EMAIL_QUEUE,
        }),
    ],
    exports: [BullModule]
})
export class QueueModule {}
