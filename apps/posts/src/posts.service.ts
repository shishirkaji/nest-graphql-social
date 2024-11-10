import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: '123', body: 'This is my first post ', title: 'Life', authorId: '1' },
  ];
  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll() {
    return this.posts;
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

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
