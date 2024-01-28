import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkspaceService } from "./workspace.service";
import { WorkspaceControllerBase } from "./base/workspace.controller.base";

@swagger.ApiTags("workspaces")
@common.Controller("workspaces")
export class WorkspaceController extends WorkspaceControllerBase {
  constructor(
    protected readonly service: WorkspaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
