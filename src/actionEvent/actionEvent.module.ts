import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ActionEventModuleBase } from "./base/actionEvent.module.base";
import { ActionEventService } from "./actionEvent.service";
import { ActionEventController } from "./actionEvent.controller";
import { ActionEventResolver } from "./actionEvent.resolver";

@Module({
  imports: [ActionEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [ActionEventController],
  providers: [ActionEventService, ActionEventResolver],
  exports: [ActionEventService],
})
export class ActionEventModule {}
