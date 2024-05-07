import { Injectable } from '@nestjs/common';

@Injectable()
export class MvSublayerService {
  getHello(): string {
    return 'Hello World!';
  }
}
