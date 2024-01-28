import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MemberService } from "./member.service";
import { MemberControllerBase } from "./base/member.controller.base";

@swagger.ApiTags("members")
@common.Controller("members")
export class MemberController extends MemberControllerBase {
  constructor(
    protected readonly service: MemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
