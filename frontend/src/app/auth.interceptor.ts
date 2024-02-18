import { HttpInterceptorFn } from '@angular/common/http';

function getAuthToken(): string {
  // Hier die Logik implementieren, um das Token zu holen. Z.B. aus localStorage
  const token = localStorage.getItem('authToken');
  return token ? `Bearer ${token}` : '';
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {


  const authToken = getAuthToken();

  const authReq = req.clone({
    setHeaders: {
      Authorization: authToken
    }
  });

  return next(authReq);
};
