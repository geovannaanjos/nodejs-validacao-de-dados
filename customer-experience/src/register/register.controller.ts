import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService){}

    @Post()
    async createRegister(@Body() req:CreateRegisterDTO) {
        const { name, email, password, site, phone} = req;

        if(!name || !email || !password || !site || !phone){
            throw new HttpException('Todos os campos são obrigatórios', 400)
        }else{
            return this.registerService.createRegister(name, email, password, site, phone)
        }
    }
}
