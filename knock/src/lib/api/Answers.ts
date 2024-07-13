import {
  AnswerBody,
  AnswerHasBodyParams,
  AnswerParams,
} from '../../core/types/api/Request';
import { QuestionDetailResponseAnswer } from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'answer/';

export const getAnswer = async ({ subjectId, options }: AnswerParams) => {
  const url = `${DOMAIN}${subjectId}/`;
  return apiHandler.get<QuestionDetailResponseAnswer>(url, options);
};

export const putAnswer = async ({
  subjectId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${subjectId}/`;
  return apiHandler.put<AnswerBody, QuestionDetailResponseAnswer>(
    url,
    body,
    options,
  );
};

export const patchAnswer = async ({
  subjectId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const url = `${DOMAIN}${subjectId}/`;
  return apiHandler.put<AnswerBody, QuestionDetailResponseAnswer>(
    url,
    body,
    options,
  );
};

export const deleteAnswer = async ({ subjectId, options }: AnswerParams) => {
  const url = `${DOMAIN}${subjectId}/`;
  return apiHandler.delete<undefined>(url, options);
};
