import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MemberModuleBase } from "./base/member.module.base";
import { MemberService } from "./member.service";
import { MemberController } from "./member.controller";
import { MemberResolver } from "./member.resolver";

@Module({
  imports: [MemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [MemberController],
  providers: [MemberService, MemberResolver],
  exports: [MemberService],
})
export class MemberModule {}
