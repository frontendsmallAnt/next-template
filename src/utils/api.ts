import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { TestRouter } from './trpc';
export const setUpClient = createTRPCClient<TestRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});