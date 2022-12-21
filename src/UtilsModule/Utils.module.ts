import { Module, Global } from '@nestjs/common';
import { CloudinaryService } from './Cloudinary.service';

@Global()
@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class UtilsModule {}
