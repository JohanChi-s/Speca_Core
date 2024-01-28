import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkspaceModuleBase } from "./base/workspace.module.base";
import { WorkspaceService } from "./workspace.service";
import { WorkspaceController } from "./workspace.controller";
import { WorkspaceResolver } from "./workspace.resolver";

@Module({
  imports: [WorkspaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceResolver],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
