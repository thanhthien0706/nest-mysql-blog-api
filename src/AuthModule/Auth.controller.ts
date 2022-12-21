import { Response } from 'express';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './Auth.service';
import { SignupDto } from './dto/Auth.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  async postSignup(
    @Body() formSignup: SignupDto,
    @UploadedFile() avatarFile: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const dataUser = await this.authService.signup(formSignup, avatarFile);

      return res.status(HttpStatus.OK).json({
        data: dataUser,
      });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
