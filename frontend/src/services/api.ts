// Lightweight fetch wrapper used by frontend services
const baseURL = import.meta.env.VITE_API_URL || '';

async function request(path, opts = {}) {
	const url = `${baseURL}${path}`;
	const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
	const init = { credentials: 'include', ...opts, headers };

	if (init.body && typeof init.body !== 'string') {
		init.body = JSON.stringify(init.body);
	}

	const res = await fetch(url, init);

	const contentType = res.headers.get('content-type') || '';
	const isJson = contentType.includes('application/json');

	if (!res.ok) {
		const errBody = isJson ? await res.json() : await res.text();
		const error = new Error(errBody?.message || res.statusText || 'Request failed');
		// attach additional info
		(error as any).status = res.status;
		(error as any).body = errBody;
		throw error;
	}

	if (isJson) return res.json();
	return res.text();
}

export const api = {
	get: (path, opts = {}) => request(path, { method: 'GET', ...opts }),
	post: (path, body, opts = {}) => request(path, { method: 'POST', body, ...opts }),
	put: (path, body, opts = {}) => request(path, { method: 'PUT', body, ...opts }),
	del: (path, opts = {}) => request(path, { method: 'DELETE', ...opts }),
};

export default api;
