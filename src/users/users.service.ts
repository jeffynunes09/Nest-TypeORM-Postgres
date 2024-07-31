import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository} from "typeorm"
import { Users } from './user.entity';
@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ){}


    async findAllUsers (): Promise<Users[]>{
        return  await this.usersRepository.find()
    }

    async createUser(userDTO : CreateUserDTO): Promise<CreateUserDTO>{
        const createdUser = await this.usersRepository.save(userDTO)
        return createdUser
    }
}
