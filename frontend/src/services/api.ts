// Lightweight fetch wrapper used by frontend services
const baseURL = import.meta.env.VITE_API_URL || '';

interface RequestOpts extends RequestInit {
  headers?: Record<string, string>;
}

async function request(path: string, opts: RequestOpts = {}) {
  const url = `${baseURL}${path}`;
  const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
  const init: RequestInit = { credentials: 'include' as const, ...opts, headers };

  if (init.body && typeof init.body !== 'string') {
    init.body = JSON.stringify(init.body);
  }

  const res = await fetch(url, init);

  const contentType = res.headers.get('content-type') || '';
  const isJson = contentType.includes('application/json');

  if (!res.ok) {
    const errBody = isJson ? await res.json() : await res.text();
    const error = new Error((errBody?.message) || res.statusText || 'Request failed');
    // attach additional info
    (error as any).status = res.status;
    (error as any).body = errBody;
    throw error;
  }

  if (isJson) return res.json();
  return res.text();
}

export const api = {
  get: (path: string, opts: RequestOpts = {}) => request(path, { method: 'GET', ...opts }),
  post: (path: string, body?: any, opts: RequestOpts = {}) => request(path, { method: 'POST', body, ...opts }),
  put: (path: string, body?: any, opts: RequestOpts = {}) => request(path, { method: 'PUT', body, ...opts }),
  del: (path: string, opts: RequestOpts = {}) => request(path, { method: 'DELETE', ...opts }),
};

export default api;
