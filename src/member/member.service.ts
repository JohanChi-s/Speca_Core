import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MemberServiceBase } from "./base/member.service.base";

@Injectable()
export class MemberService extends MemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
