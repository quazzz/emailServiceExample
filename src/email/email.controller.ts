import { emailDto } from './dto/email.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService){}
    @Post()
    async sendEmail(@Body() emailDto: emailDto){
        return this.emailService.sendEmail(emailDto)
    }

}
