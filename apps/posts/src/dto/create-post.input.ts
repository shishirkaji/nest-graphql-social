import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  authorId: string;
}
