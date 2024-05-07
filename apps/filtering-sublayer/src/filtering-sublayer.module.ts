import { Module } from '@nestjs/common';
import { FilteringSublayerController } from './controller/filtering-sublayer.controller';
import { FilteringSublayerService } from './service/filtering-sublayer.service';

@Module({
  imports: [],
  controllers: [FilteringSublayerController],
  providers: [FilteringSublayerService],
})
export class FilteringSublayerModule {}
