import { APIOptions } from '../../core/types/api/Request';
import { apiHandler } from './APIHandler';

const DOMAIN = 'questions/';

interface QuestionDetailsProps extends APIOptions {
  questionId: number | string;
}

interface QuestionDetailResponseAnswer {
  id: number;
  questionId: number;
  content: string;
  isRejected: boolean;
  createdAt: string;
}

interface QuestionsDetailResponse {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  answer: QuestionDetailResponseAnswer;
}

export const getQuestionDetails = async ({
  questionId,
  options,
}: QuestionDetailsProps) => {
  const url = `${DOMAIN}${questionId}/`;
  return await apiHandler.get<QuestionsDetailResponse>(url, options);
};

interface DeleteQuestionProps extends APIOptions {
  questionId: number | string;
}

export const deleteQuestion = async ({
  questionId,
  options,
}: DeleteQuestionProps) => {
  const url = `${DOMAIN}${questionId}/`;
  return await apiHandler.delete<undefined>(url, options);
};

interface CreateQuestionReactionProps extends APIOptions {
  questionId: number | string;
  type: 'like' | 'dislike';
}

interface CreateQuestionReactionResponse {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  answer: null | QuestionDetailResponseAnswer;
}

export const createQuestionReaction = async ({
  questionId,
  type,
  options,
}: CreateQuestionReactionProps) => {
  const url = `${DOMAIN}${questionId}/reaction/`;
  const body = { type };
  return await apiHandler.post<
    Omit<CreateQuestionReactionProps, 'questionId' | 'options'>,
    CreateQuestionReactionResponse
  >(url, body, options);
};

interface CreateQuestionAnswerProps extends APIOptions {
  questionId: number | string;
  content: string;
  isRejected: boolean;
}

interface CreateQuestionAnswerResponse {
  answerId: number;
  questionId: number;
  content: string;
  isRejected: boolean;
  createdAt: string;
}

export const createQuestionAnswer = async ({
  questionId,
  content,
  isRejected,
  options,
}: CreateQuestionAnswerProps) => {
  const url = `${DOMAIN}${questionId}/answers/`;
  const body = {
    content,
    isRejected,
  };
  return await apiHandler.post<
    Omit<CreateQuestionAnswerProps, 'questionId' | 'options'>,
    CreateQuestionAnswerResponse
  >(url, body, options);
};
