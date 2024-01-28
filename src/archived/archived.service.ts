import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArchivedServiceBase } from "./base/archived.service.base";

@Injectable()
export class ArchivedService extends ArchivedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
