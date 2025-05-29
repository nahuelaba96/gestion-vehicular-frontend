// utils/cookies.ts
export function getCookie(name: string): string | null {
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
