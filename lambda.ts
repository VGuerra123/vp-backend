import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { Callback, Context, Handler } from "aws-lambda";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import serverlessExpress from "@vendia/serverless-express";

let cachedServer: Handler;

async function bootstrapServer() {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);

  const app = await NestFactory.create(AppModule, adapter);
  app.enableCors();
  await app.init();

  return serverlessExpress({ app: expressApp });
}

export const handler = async (
  event: any,
  context: Context,
  callback: Callback
) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }
  return cachedServer(event, context, callback);
};
