import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkspaceServiceBase } from "./base/workspace.service.base";

@Injectable()
export class WorkspaceService extends WorkspaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
