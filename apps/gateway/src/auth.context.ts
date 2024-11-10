import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (!req.headers?.authorization) {
    throw new UnauthorizedException('Unauthorized');
  }
  return { user: { id: 1 } };
};
