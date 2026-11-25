import { Injectable } from '@nestjs/common';

// Business logic
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Universe!';
  }

  getAppName(): string {
    return 'Secure Auth System'
  }
}
