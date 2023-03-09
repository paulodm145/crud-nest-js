import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

interface exemplo {
    items: string[];
}
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  @Header('X-My-Header', 'my-value')
  setHello(): exemplo {
    return { items: ['item1', 'item2', 'item3'] };
  }
}
