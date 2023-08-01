import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayersService {

  constructor(private prisma: PrismaService) {
    
  }
  async create(createPlayerDto: CreatePlayerDto) {
    const createData = await this.prisma.player.create({
     data:{
      firstname: createPlayerDto.firstname,
      lastname:createPlayerDto.lastname,
      goal:Number(createPlayerDto.goal),
      salary:Number(createPlayerDto.salary),
      devise:createPlayerDto.devise,
      pictureURl:createPlayerDto.pictureURl
    },
    });
      
    return {
      statusCode: 200,
      data: createData,
    };
  }

  async findAll() {
    const dataTasks = await this.prisma.player.findMany({});
    return {
      statusCode: 200,
      data: dataTasks,
    };
  }

  async findOne(id: number) {
    const dataTask = await this.prisma.player.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a  #${id} player`;
    
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
