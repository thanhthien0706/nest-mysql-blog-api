import { Response } from 'express';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleCreateDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  getRole(): string {
    return 'Page Role';
  }

  @Post()
  async createRole(@Body() roleDto: RoleCreateDto, @Res() res: Response) {
    try {
      const roleData = await this.roleService.createRole(roleDto);

      return res.status(HttpStatus.OK).json({
        data: roleData,
      });
    } catch (error) {
      if (error) {
        throw new BadRequestException(error.message);
      }
    }
  }
}
