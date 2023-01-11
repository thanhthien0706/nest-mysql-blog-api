import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { ResponseHttpService } from './ResponseHttp.service';

@Module({
  providers: [ResponseHttpService],
  exports: [ResponseHttpService],
})
export class BaseModule {}
