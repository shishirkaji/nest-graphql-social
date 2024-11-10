import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field(() => ID)
  authorId: string;

  @Field(() => User)
  user?: User;
}
