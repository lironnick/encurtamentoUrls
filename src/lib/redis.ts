import { createClient } from 'redis';

export const redis = createClient({
  url: 'redis://:docker@localhost:6379',
  password: 'docker',
});

// Handle connection errors
redis.on('error', (err) => console.error('Redis Client Error', err));

redis.connect();
