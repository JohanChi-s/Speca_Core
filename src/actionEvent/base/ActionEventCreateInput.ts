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
import { EnumActionEventAction } from "./EnumActionEventAction";
import { IsEnum, IsString, IsOptional, ValidateNested } from "class-validator";
import { CollectionWhereUniqueInput } from "../../collection/base/CollectionWhereUniqueInput";
import { Type } from "class-transformer";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

@InputType()
class ActionEventCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumActionEventAction,
  })
  @IsEnum(EnumActionEventAction)
  @Field(() => EnumActionEventAction)
  action!:
    | "Download"
    | "Upload"
    | "Edit"
    | "Delete"
    | "AddRole"
    | "RemoveRole"
    | "Duplicate"
    | "Comment"
    | "Share"
    | "Assign"
    | "Star"
    | "Public"
    | "Private";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  actor?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assignee?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assigner?: string | null;

  @ApiProperty({
    required: false,
    type: () => CollectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CollectionWhereUniqueInput)
  @IsOptional()
  @Field(() => CollectionWhereUniqueInput, {
    nullable: true,
  })
  collection?: CollectionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentWhereUniqueInput)
  @IsOptional()
  @Field(() => DocumentWhereUniqueInput, {
    nullable: true,
  })
  document?: DocumentWhereUniqueInput | null;
}

export { ActionEventCreateInput as ActionEventCreateInput };
