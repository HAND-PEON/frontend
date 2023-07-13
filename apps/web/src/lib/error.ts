export function isApiError(e: any): e is ApiError {
  return (
    e?.error !== undefined && e?.status !== undefined && e?.path !== undefined
  );
}

export interface ApiError {
  error: string;
  path: string;
  status: number;
  timestamp: string;
}

export function extractError(e: any): ApiError {
  if (isApiError(e)) {
    return e;
  }
  return {
    error: 'unkown error',
    path: 'unkown',
    status: 500,
    timestamp: new Date().toISOString(),
  };
}
