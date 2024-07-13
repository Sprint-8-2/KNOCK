import { APIOptions } from '../../core/types/api/Request';
import {
  QuestionReactionResponse,
  SubjectDetailResponse,
  SubjectListResponse,
  SubjectQuestionListResponse,
} from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'subjects/';

interface SubjectListParams extends APIOptions {
  limit?: number;
  offset?: number;
}

export const getSubjectList = async ({
  limit = undefined,
  offset = undefined,
  options,
}: SubjectListParams) => {
  const url = `${DOMAIN}?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}/`;
  return await apiHandler.get<SubjectListResponse>(url, options);
};

interface SubjectGetDetailParams extends APIOptions {
  userId: number | string;
}

export const getDetailSubject = async ({
  userId,
  options,
}: SubjectGetDetailParams) => {
  const url = `${DOMAIN}${userId}/`;
  return await apiHandler.get<SubjectDetailResponse>(url, options);
};

interface CreateSubjectProps extends APIOptions {
  name: string;
}

export const createSubject = async ({ name, options }: CreateSubjectProps) => {
  const body = { name };
  return await apiHandler.post<
    Omit<CreateSubjectProps, 'optionss'>,
    SubjectDetailResponse
  >(DOMAIN, body, options);
};

interface DeleteSubjectProps extends APIOptions {
  subjectId: number | string;
}

export const deleteSubject = async ({
  subjectId,
  options,
}: DeleteSubjectProps) => {
  const url = `${DOMAIN}${subjectId}/`;
  return await apiHandler.delete<undefined>(url, options);
};

interface SubjectQuestionListParams extends SubjectListParams {
  subjectId: number | string;
}

export const getSubjectQuestionList = async ({
  subjectId,
  limit,
  offset,
  options,
}: SubjectQuestionListParams) => {
  const url = `${DOMAIN}${subjectId}/questions/?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}/`;
  return await apiHandler.get<SubjectQuestionListResponse>(url, options);
};

interface CreateSubjectQuestionAnswer {
  content: string;
  isRejected: boolean;
}

interface CreateSubjectQuestionProps extends APIOptions {
  subjectId: number | string;
  content: string;
  like?: number;
  dislike?: number;
  answer?: CreateSubjectQuestionAnswer;
}

const DEFAULT_SUBJECT_QUESTION_ANWER = {
  content: '',
  isRejected: false,
};

export const createSubjectQuestion = async ({
  subjectId,
  content,
  like = 0,
  dislike = 0,
  answer = DEFAULT_SUBJECT_QUESTION_ANWER,
  options,
}: CreateSubjectQuestionProps) => {
  const url = `${DOMAIN}${subjectId}/questions/`;
  const body = {
    content,
    like,
    dislike,
    answer,
  };
  return await apiHandler.post<
    Omit<CreateSubjectQuestionProps, 'subjectId' | 'options'>,
    QuestionReactionResponse
  >(url, body, options);
};
