import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PositionModuleBase } from "./base/position.module.base";
import { PositionService } from "./position.service";
import { PositionController } from "./position.controller";
import { PositionResolver } from "./position.resolver";

@Module({
  imports: [PositionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PositionController],
  providers: [PositionService, PositionResolver],
  exports: [PositionService],
})
export class PositionModule {}
