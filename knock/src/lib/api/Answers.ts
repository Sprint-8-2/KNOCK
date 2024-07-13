import { apiHandler } from './APIHandler';

const DOMAIN = 'answer/';

interface AnswerParams {
  userId: number | string;
  options?: Omit<RequestInit, 'method' | 'body'>;
}

export const getAnswer = async <T = any>({ userId, options }: AnswerParams) => {
  const url = `${DOMAIN}${userId}`;
  return apiHandler.get<T>(url, options).catch((e) => {
    console.dir(e);
  });
};

interface AnswerHasBodyParams extends AnswerParams {
  body: AnswerBody;
}

interface AnswerBody {
  content: string;
  isRejected: boolean;
}

export const putAnswer = async <ResponseType = ReturnType<typeof fetch>>({
  userId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${userId}`;
  return apiHandler.put<AnswerBody, ResponseType>(url, body, options);
};

export const patchAnswer = async <ResponseType = ReturnType<typeof fetch>>({
  userId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${userId}`;
  return apiHandler.put<AnswerBody, ResponseType>(url, body, options);
};

export const deleteAnswer = async <T = any>({
  userId,
  options,
}: AnswerParams) => {
  const url = `${DOMAIN}${userId}`;
  return apiHandler.delete<T>(url, options);
};
