import { Process, Processor } from "@nestjs/bull";
import { Job } from 'bull'
import { EMAIL_QUEUE } from "src/queue/queue.constants";

@Processor(EMAIL_QUEUE)
export class EmailProcessor {
    @Process('send-email')
    async handleSendEmail(job: Job){
        const { to, subject, msg} = job.data;
        console.log(`
            to: ${to}
            subject: ${subject}
            text: ${msg}
            `)
    }
}