export const http = async (url: string, options?: RequestInit) => {
  const res = await fetch(`${import.meta.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  return res.json();
};
