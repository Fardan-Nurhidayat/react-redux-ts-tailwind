export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  nama: string;
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    nama: string;
    email: string;
    token: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  nama: string;
  email: string;
}
