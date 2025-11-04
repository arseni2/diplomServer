import {Body, Controller, Post, Req} from '@nestjs/common';
import {SendMessageDto} from "../dto/SendMessage.dto";
import {TgService} from "../service/tg.service";

@Controller('tg')
export class TgController {
    constructor(private readonly tgService: TgService) {
    }

    @Post()
    sendMessage(@Body() dto: SendMessageDto, @Req() req: Request) {
        console.log(req);
        return this.tgService.sendMessage(dto)
    }
}
