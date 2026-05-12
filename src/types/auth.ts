import type { User } from './user';

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
};
