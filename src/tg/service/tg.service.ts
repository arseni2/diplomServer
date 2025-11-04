import {Injectable} from '@nestjs/common';
import {SendMessageDto} from "../dto/SendMessage.dto";

@Injectable()
export class TgService {
    async sendMessage(dto: SendMessageDto) {
        const token = "8398198231:AAEIeOTWxHz1RtyK_cRYfkrDCWzK7Ppy5y8";
        const chat_id = -5021476288;
        const text = `Новая заявка риелтора:\n\nФИО: ${dto.fullName}\nEmail: ${dto.email}\nTelegram: ${dto.telegram}\nТелефон: ${dto.phone}`;

        return await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id, text}),
        })
    }
}
