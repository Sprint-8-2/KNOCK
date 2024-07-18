const BASE_URL = 'https://openmind-api.vercel.app/8-2/';

type NetworkError = {
  detail?: string;
};

class APIHandler {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async apiHandler<T = any>(path: string, options?: RequestInit) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options?.headers,
    };

    const _options: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${this.baseUrl}${path}`, _options);
      if (!response.ok) {
        const error = (await response.json()) as NetworkError;
        throw new Error(`${error.detail ?? '알 수 없는 에러입니다'}`);
      }

      // No Content
      if (response.status === 204) {
        return {} as T;
      }

      return response.json() as T;
    } catch (error) {
      console.log('API Error');
      console.log(error);
      throw error;
    }
  }

  public async get<T = any>(
    path: string,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<T>(path, options);
  }

  public async post<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(path, {
      method: 'POST',
      ...options,
      body: JSON.stringify(body),
    });
  }

  public async put<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(path, {
      method: 'PUT',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async patch<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    path: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(path, {
      method: 'PATCH',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async delete<T = any>(
    path: string,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<T>(path, {
      method: 'DELETE',
      ...options,
    });
  }
}

export const apiHandler = new APIHandler(BASE_URL);
