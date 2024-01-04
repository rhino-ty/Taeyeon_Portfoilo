import { accessTokenStore } from '#/store/auth/access-token-store';

export const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('refreshToken', refreshToken);
  }
};
export const getRefreshTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refreshToken') || '';
  }
};

export const saveAccessTokenToZustand = (accessToken: string) => {
  accessTokenStore.getState().setAccessToken(accessToken);
};
export const getAccessTokenFromZustand = () => {
  return accessTokenStore.getState().accessToken;
};

// export const saveAccessTokenToLocalStorage = (accessToken: string) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('accessToken', accessToken);
//   }
// };
// export const getAccessTokenFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     return localStorage.getItem('accessToken') || '';
//   }
// };
