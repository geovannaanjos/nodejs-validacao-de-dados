import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createRegister(
        name: string,
        email: string,
        password: string,
        site:string,
        phone:string
    ){
        return {msg:`Cliente ${name} cadastrado com sucesso!`}
    }
}
