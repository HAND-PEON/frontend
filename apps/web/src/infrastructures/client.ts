import qs from 'qs';

interface RequestConfig {
  params?: any;
  headers?: HeadersInit;
  signal?: AbortSignal;
}

export interface IHttp {
  baseUrl?: string;
  get?<T>(
    url: string,
    config?: RequestConfig,
  ): Promise<{ data: T; headers?: Headers }>;
  post?<T>(
    url: string,
    body?: any,
    config?: RequestConfig,
  ): Promise<{ data: T; headers?: Headers }>;
  patch?<T>(
    url: string,
    body?: any,
    config?: RequestConfig,
  ): Promise<{ data: T; headers?: Headers }>;
  delete?<T>(
    url: string,
    config?: RequestConfig,
  ): Promise<{ data: T; headers?: Headers }>;
}

const Http: IHttp = {
  baseUrl: 'http://localhost:3000',
  async get<T>(url: string, config: RequestConfig = {}) {
    const queryString = config?.params
      ? qs.stringify(config.params, { addQueryPrefix: true })
      : '';
    const res = await fetch(this.baseUrl.concat(url, queryString), {
      method: 'GET',
      headers: {
        ...(config?.headers ?? {}),
      },
    });
    const data: T = await res.json();
    if (res.ok) {
      const { headers } = res;
      return {
        data,
        headers,
      };
    } else {
      return Promise.reject(data);
    }
  },
  async post<T>(url: string, body?: any, config: RequestConfig = {}) {
    const res = await fetch(this.baseUrl.concat(url), {
      method: 'POST',
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(config.headers ?? {}),
      },
      signal: config.signal,
      body: body ? JSON.stringify(body) : undefined,
    });
    const data: T = await res.json();
    if (res.ok) {
      const { headers } = res;
      return {
        data,
        headers,
      };
    } else {
      return Promise.reject(data);
    }
  },
  async patch<T>(url: string, body: any, config: RequestConfig = {}) {
    const res = await fetch(this.baseUrl.concat(url), {
      method: 'PATCH',
      ...(typeof window === 'undefined' ? {} : { credentials: 'include' }),
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(config.headers ?? {}),
      },
      signal: config.signal,
      body: JSON.stringify(body),
    });

    const data: T = await res.json();
    if (res.ok) {
      const { headers } = res;
      return {
        data,
        headers,
      };
    } else {
      return Promise.reject(data);
    }
  },
  async delete<T = any>(url: string, config: RequestConfig = {}) {
    const querystring = config?.params
      ? qs.stringify(config?.params, { addQueryPrefix: true })
      : '';

    const res = await fetch(this.baseUrl.concat(url, querystring), {
      method: 'DELETE',
      headers: {
        ...(config.headers ?? {}),
      },
      signal: config.signal,
    });

    const data: T = await res.json();
    if (res.ok) {
      const { headers } = res;
      return {
        data,
        headers,
      };
    } else {
      return Promise.reject(data);
    }
  },
};

export default Http;
