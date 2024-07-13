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
  const url = `${DOMAIN}${questionId}/`;
  return await apiHandler.get<QuestionDetailResponse>(url, options);
};
export const deleteQuestion = async ({
  questionId,
  options,
}: QuestionDetailsProps) => {
  const url = `${DOMAIN}${questionId}/`;
  return await apiHandler.delete<undefined>(url, options);
};

export const createQuestionReaction = async ({
  questionId,
  type,
  options,
}: QuestionReactionProps) => {
  const url = `${DOMAIN}${questionId}/reaction/`;
  const body = { type };
  return await apiHandler.post<
    Omit<QuestionReactionProps, 'questionId' | 'options'>,
    QuestionDetailResponse
  >(url, body, options);
};
export const createQuestionAnswer = async ({
  questionId,
  content,
  isRejected,
  options,
}: QuestionAnswerProps) => {
  const url = `${DOMAIN}${questionId}/answers/`;
  const body = {
    content,
    isRejected,
  };
  return await apiHandler.post<
    Omit<QuestionAnswerProps, 'questionId' | 'options'>,
    QuestionAnswerResponse
  >(url, body, options);
};
