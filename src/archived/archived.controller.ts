import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArchivedService } from "./archived.service";
import { ArchivedControllerBase } from "./base/archived.controller.base";

@swagger.ApiTags("archiveds")
@common.Controller("archiveds")
export class ArchivedController extends ArchivedControllerBase {
  constructor(
    protected readonly service: ArchivedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
