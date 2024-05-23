export type TUserData = {
  username: string;
  expire_date: string;
  user_type: string;
  institution_name: string;
  institution_director: null | string;
  institution_id: number;
  token: string;
  institution: {
    id: number;
    name: string;
    unique_id: string | number;
    address: null | string;
    phone_number: null | string;
    director: null | string;
    email: null | string;
    institution_type: string;
    created_at: string;
    updated_at: string;
  };
};

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  data: TUserData | null;
}
