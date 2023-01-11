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
import { AuthService } from './services/Auth.service';
import { SignupDto } from './dto/Auth.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ResponseHttpService } from 'src/BaseModule/ResponseHttp.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseHttpService: ResponseHttpService,
  ) {}

  @Post('signup')
  @UseInterceptors(FileInterceptor('avatar'))
  async postSignup(
    @Body() formSignup: SignupDto,
    @UploadedFile() avatarFile: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const dataUser = await this.authService.signup(formSignup, avatarFile);

      return res
        .status(HttpStatus.OK)
        .json(
          this.responseHttpService.customResponeHttp(
            true,
            'Sign Up User Successfully',
            dataUser,
          ),
        );
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // @Post('signin')
  // async postSignin();
}
