import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailProcessor } from './email.processor';
import { BullModule } from '@nestjs/bull';
import { EMAIL_QUEUE } from 'src/queue/queue.constants';

@Module({
  imports: [
    BullModule.registerQueue({
      name: EMAIL_QUEUE
    })
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailProcessor]
})
export class EmailModule {}
