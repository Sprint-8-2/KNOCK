import {
  AnswerBody,
  AnswerHasBodyParams,
  AnswerParams,
} from '../../core/types/api/Request';
import { QuestionDetailResponseAnswer } from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'answer/';

export const getAnswer = async ({ userId, options }: AnswerParams) => {
  const url = `${DOMAIN}${userId}/`;
  return apiHandler.get<QuestionDetailResponseAnswer>(url, options);
};

export const putAnswer = async ({
  userId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${userId}/`;
  return apiHandler.put<AnswerBody, QuestionDetailResponseAnswer>(
    url,
    body,
    options,
  );
};

export const patchAnswer = async ({
  userId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${userId}/`;
  return apiHandler.put<AnswerBody, QuestionDetailResponseAnswer>(
    url,
    body,
    options,
  );
};

export const deleteAnswer = async ({ userId, options }: AnswerParams) => {
  const url = `${DOMAIN}${userId}/`;
  return apiHandler.delete<undefined>(url, options);
};
