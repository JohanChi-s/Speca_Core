import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PositionServiceBase } from "./base/position.service.base";

@Injectable()
export class PositionService extends PositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
