type AuthAction = {type: 'set_authenticated'} | {type: 'set_not_authenticated'};

export type UserStatus = 'authenticated' | 'not-authenticated' | 'checking';

export interface AuthState {
  userName: string;
  userStatus: UserStatus;
}

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'set_authenticated':
      return {
        ...state,
        userStatus: 'authenticated',
      };

    case 'set_not_authenticated':
      return {
        ...state,
        userStatus: 'not-authenticated',
      };

    default:
      return state;
  }
};
