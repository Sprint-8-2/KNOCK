import {
  AnswerBody,
  AnswerHasBodyParams,
  AnswerParams,
} from '../../core/types/api/Request';
import { QuestionDetailResponseAnswer } from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'answers/';

export const getAnswer = async ({ subjectId, options }: AnswerParams) => {
  const path = `${DOMAIN}${subjectId}/`;
  return apiHandler.get<QuestionDetailResponseAnswer>(path, options);
};

export const putAnswer = async ({
  subjectId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const path = `${DOMAIN}${subjectId}/`;
  return apiHandler.put<AnswerBody, QuestionDetailResponseAnswer>(
    path,
    body,
    options,
  );
};

export const patchAnswer = async ({
  subjectId,
  body,
  options,
}: AnswerHasBodyParams) => {
  const path = `${DOMAIN}${subjectId}/`;
  return apiHandler.patch<AnswerBody, QuestionDetailResponseAnswer>(
    path,
    body,
    options,
  );
};

export const deleteAnswer = async ({ subjectId, options }: AnswerParams) => {
  const path = `${DOMAIN}${subjectId}/`;
  return apiHandler.delete<undefined>(path, options);
};
