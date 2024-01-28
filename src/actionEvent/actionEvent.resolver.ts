import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ActionEventResolverBase } from "./base/actionEvent.resolver.base";
import { ActionEvent } from "./base/ActionEvent";
import { ActionEventService } from "./actionEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ActionEvent)
export class ActionEventResolver extends ActionEventResolverBase {
  constructor(
    protected readonly service: ActionEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
