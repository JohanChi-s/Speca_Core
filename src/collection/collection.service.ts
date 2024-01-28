import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollectionServiceBase } from "./base/collection.service.base";

@Injectable()
export class CollectionService extends CollectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
