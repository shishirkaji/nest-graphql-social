import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: '123', body: 'This is my first post ', title: 'Life', authorId: '1' },
  ];
  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll(user: User) {
    const thisPosts = this.posts.filter((post) => post.authorId == user.id);
    console.log('posts', { thisPosts, user, posts: this.posts });
    return thisPosts;
  }

  findOne(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  update(id: string, updatePostInput: UpdatePostInput) {
    const postToUpdate = this.posts.findIndex((post) => post.id === id);
    this.posts[postToUpdate] = {
      ...this.posts[postToUpdate],
      ...updatePostInput,
    };
  }
  forAuthor(authorId: string) {
    return this.posts.filter((post) => post.authorId === authorId);
  }
  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
