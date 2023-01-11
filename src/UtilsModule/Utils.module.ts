import { Module, Global } from '@nestjs/common';
import { CloudinaryService } from './Cloudinary.service';
import { RandomService } from './Random.service';

@Global()
@Module({
  providers: [CloudinaryService, RandomService],
  exports: [CloudinaryService, RandomService],
})
export class UtilsModule {}
