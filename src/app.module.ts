import { Module } from '@nestjs/common';
import { LambdaService } from './lambda/lambda.service';
import { NotLambdaService } from './not-lambda/not-lambda.service';

@Module({
  imports: [],
  controllers: [],
  providers: [LambdaService],
})
export class AppModule {}
