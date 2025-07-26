import { Injectable } from '@nestjs/common';
import { emailDto } from './dto/email.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull'
import { EMAIL_QUEUE } from 'src/queue/queue.constants';
@Injectable()
export class EmailService {
    constructor(
        @InjectQueue(EMAIL_QUEUE) private readonly emailQueue: Queue
    ) { }
    async sendEmail(emailDto: emailDto) {
        await this.emailQueue.add('send-email',emailDto)
    }
}
