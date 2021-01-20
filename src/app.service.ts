import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Yashwanth!';
  }

  getAbout(): string{
    return 'This is about page!';
  }
}
