import { NestFactory } from '@nestjs/core';
import { Context, Handler, Callback } from 'aws-lambda';

import { AppModule } from './app.module';
import { NotLambdaService } from './not-lambda/not-lambda.service';
import { HttpStatus } from '@nestjs/common';
import { LambdaService } from './lambda/lambda.service';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(LambdaService);

  const user = {
    name: `${event.queryStringParameters?.name}`,
  };

  return {
    body: await appService.buildPdf(user),
    headers: {
      'Content-Type': 'application/pdf',
    },
    isBase64Encoded: true,
    statusCode: HttpStatus.OK,
  };
};
