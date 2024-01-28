import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CollectionModuleBase } from "./base/collection.module.base";
import { CollectionService } from "./collection.service";
import { CollectionController } from "./collection.controller";
import { CollectionResolver } from "./collection.resolver";

@Module({
  imports: [CollectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CollectionController],
  providers: [CollectionService, CollectionResolver],
  exports: [CollectionService],
})
export class CollectionModule {}
