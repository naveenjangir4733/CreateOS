import type { User } from '@/types/user';
import { http } from './http.services';

export const authService = {
  me: (): Promise<{ user: User }> => {
    return http('/api/me');
  },

  login: (data: { email: string; password: string }) => {
    return http('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  logout: () => {
    return http('/api/logout', {
      method: 'POST',
    });
  },
};
