import {
  CreateSubjectProps,
  CreateSubjectQuestionProps,
  DeleteSubjectProps,
  SubjectGetDetailParams,
  SubjectListParams,
  SubjectQuestionListParams,
} from '../../core/types/api/Request';
import {
  QuestionDetailResponse,
  SubjectDetailResponse,
  SubjectListResponse,
  SubjectQuestionListResponse,
} from '../../core/types/api/Response';
import { apiHandler } from './APIHandler';

const DOMAIN = 'subjects/';

export const getSubjectList = async ({
  limit = undefined,
  offset = undefined,
  options,
}: SubjectListParams) => {
  const path = `${DOMAIN}?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}/`;
  return await apiHandler.get<SubjectListResponse>(path, options);
};

export const getDetailSubject = async ({
  subjectId,
  options,
}: SubjectGetDetailParams) => {
  const path = `${DOMAIN}${subjectId}/`;
  return await apiHandler.get<SubjectDetailResponse>(path, options);
};

export const createSubject = async ({ name, options }: CreateSubjectProps) => {
  const body = { name };
  return await apiHandler.post<
    Omit<CreateSubjectProps, 'optionss'>,
    SubjectDetailResponse
  >(DOMAIN, body, options);
};

export const deleteSubject = async ({
  subjectId,
  options,
}: DeleteSubjectProps) => {
  const path = `${DOMAIN}${subjectId}/`;
  return await apiHandler.delete<undefined>(path, options);
};

export const getSubjectQuestionList = async ({
  subjectId,
  limit,
  offset,
  options,
}: SubjectQuestionListParams) => {
  const path = `${DOMAIN}${subjectId}/questions/?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}/`;
  return await apiHandler.get<SubjectQuestionListResponse>(path, options);
};

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
  const path = `${DOMAIN}${subjectId}/questions/`;
  const body = {
    content,
    like,
    dislike,
    answer,
  };
  return await apiHandler.post<
    Omit<CreateSubjectQuestionProps, 'subjectId' | 'options'>,
    QuestionDetailResponse
  >(path, body, options);
};
