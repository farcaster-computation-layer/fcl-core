import { Module } from '@nestjs/common';
import { MvSublayerController } from './controller/mv-sublayer.controller';
import { MvSublayerService } from './service/mv-sublayer.service';

@Module({
  imports: [],
  controllers: [MvSublayerController],
  providers: [MvSublayerService],
})
export class MvSublayerModule {}
