import { ApiProperty } from "@nestjs/swagger";
import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsString } from "class-validator";

@InputType()
export class Credentials {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  username!: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;
}
@InputType()
export class CreateUserDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  username!: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsEmail()
  @Field(() => String, { nullable: false })
  email!: string;
}


