import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PositionService } from "./position.service";
import { PositionControllerBase } from "./base/position.controller.base";

@swagger.ApiTags("positions")
@common.Controller("positions")
export class PositionController extends PositionControllerBase {
  constructor(
    protected readonly service: PositionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
