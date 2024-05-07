import { Injectable } from '@nestjs/common';

@Injectable()
export class FilteringSublayerService {
  getHello(): string {
    return 'Hello World!';
  }
}
