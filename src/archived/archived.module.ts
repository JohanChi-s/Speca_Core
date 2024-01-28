import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArchivedModuleBase } from "./base/archived.module.base";
import { ArchivedService } from "./archived.service";
import { ArchivedController } from "./archived.controller";
import { ArchivedResolver } from "./archived.resolver";

@Module({
  imports: [ArchivedModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArchivedController],
  providers: [ArchivedService, ArchivedResolver],
  exports: [ArchivedService],
})
export class ArchivedModule {}
