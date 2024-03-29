/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { TeamUpdateManyWithoutWorkspacesInput } from "./TeamUpdateManyWithoutWorkspacesInput";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutWorkspacesInput } from "./UserUpdateManyWithoutWorkspacesInput";

@InputType()
class WorkspaceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPublic?: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => TeamUpdateManyWithoutWorkspacesInput,
  })
  @ValidateNested()
  @Type(() => TeamUpdateManyWithoutWorkspacesInput)
  @IsOptional()
  @Field(() => TeamUpdateManyWithoutWorkspacesInput, {
    nullable: true,
  })
  teams?: TeamUpdateManyWithoutWorkspacesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutWorkspacesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutWorkspacesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutWorkspacesInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutWorkspacesInput;
}

export { WorkspaceUpdateInput as WorkspaceUpdateInput };
