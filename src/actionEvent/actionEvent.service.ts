import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActionEventServiceBase } from "./base/actionEvent.service.base";

@Injectable()
export class ActionEventService extends ActionEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
