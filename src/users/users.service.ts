import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{Repository} from "typeorm"
import { Users } from './user.entity';
import { UsersDto } from './dto/users.dto';




@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ){}


    async findAllUsers (): Promise<Users[]>{
        return  await this.usersRepository.find()
    }

    async createUser(userDTO : UsersDto): Promise<UsersDto>{
        const createdUser = await this.usersRepository.save(userDTO)
        return createdUser
    }
}
