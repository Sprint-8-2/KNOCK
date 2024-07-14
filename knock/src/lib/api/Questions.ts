import {
  QuestionAnswerProps,
  QuestionDetailsProps,
  QuestionReactionProps,
} from '../../core/types/api/Request';
import {
  QuestionAnswerResponse,
  QuestionDetailResponse,
} from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'questions/';

export const getQuestionDetails = async ({
  questionId,
  options,
}: QuestionDetailsProps) => {
  const path = `${DOMAIN}${questionId}/`;
  return await apiHandler.get<QuestionDetailResponse>(path, options);
};
export const deleteQuestion = async ({
  questionId,
  options,
}: QuestionDetailsProps) => {
  const path = `${DOMAIN}${questionId}/`;
  return await apiHandler.delete<undefined>(path, options);
};

export const createQuestionReaction = async ({
  questionId,
  type,
  options,
}: QuestionReactionProps) => {
  const path = `${DOMAIN}${questionId}/reaction/`;
  const body = { type };
  return await apiHandler.post<
    Omit<QuestionReactionProps, 'questionId' | 'options'>,
    QuestionDetailResponse
  >(path, body, options);
};
export const createQuestionAnswer = async ({
  questionId,
  content,
  isRejected,
  options,
}: QuestionAnswerProps) => {
  const path = `${DOMAIN}${questionId}/answers/`;
  const body = {
    content,
    isRejected,
  };
  return await apiHandler.post<
    Omit<QuestionAnswerProps, 'questionId' | 'options'>,
    QuestionAnswerResponse
  >(path, body, options);
};
