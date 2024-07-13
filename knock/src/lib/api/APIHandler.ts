const BASE_URL = 'https://openmind-api.vercel.app/8-2/';

type NetworkError = {
  detail?: string;
};

class APIHandler {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async apiHandler<T = any>(url: string, options?: RequestInit) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options?.headers,
    };

    const _options: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(`${this.baseUrl}${url}`, _options);
      if (!response.ok) {
        const error = (await response.json()) as NetworkError;
        throw new Error(`${error.detail ?? '알 수 없는 에러입니다'}`);
      }

      return response.json() as T;
    } catch (error) {
      console.log('API Error');
      console.log(error);
      throw error;
    }
  }

  public async get<T = any>(
    url: string,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<T>(url, options);
  }

  public async post<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    url: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(url, {
      method: 'POST',
      ...options,
      body: JSON.stringify(body),
    });
  }

  public async put<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    url: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(url, {
      method: 'PUT',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async patch<BodyType = any, ResponseType = ReturnType<typeof fetch>>(
    url: string,
    body: BodyType,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<ResponseType>(url, {
      method: 'PATCH',
      ...options,
      body: JSON.stringify(body),
    });
  }
  public async delete<T = any>(
    url: string,
    options?: Omit<RequestInit, 'method' | 'body'>,
  ) {
    return await this.apiHandler<T>(url, {
      method: 'DELETE',
      ...options,
    });
  }
}

export const apiHandler = new APIHandler(BASE_URL);
