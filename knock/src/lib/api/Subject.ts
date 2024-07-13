import { apiHandler } from './APIHandler';

interface APIOptions {
  options?: Omit<RequestInit, 'method' | 'body'>;
}

const DOMAIN = 'subjects/';

interface SubjectListParams extends APIOptions {
  limit?: number;
  offset?: number;
}

export const getSubjectList = async <T = any>({
  limit = undefined,
  offset = undefined,
  options,
}: SubjectListParams) => {
  const url = `${DOMAIN}?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}`;
  return await apiHandler.get<T>(url, options);
};

interface SubjectGetDetailParams extends APIOptions {
  userId: number | string;
}

export const getDetailSubject = async <T = any>({
  userId,
  options,
}: SubjectGetDetailParams) => {
  const url = `${DOMAIN}${userId}`;
  return await apiHandler.get<T>(url, options);
};

interface CreateSubjectProps extends APIOptions {
  name: string;
}

export const createSubject = async <T = any>({
  name,
  options,
}: CreateSubjectProps) => {
  const body = { name };
  return await apiHandler.post<Omit<CreateSubjectProps, 'optionss'>, T>(
    DOMAIN,
    body,
    options,
  );
};

interface DeleteSubjectProps extends APIOptions {
  subjectId: number | string;
}

export const deleteSubject = async <T = any>({
  subjectId,
  options,
}: DeleteSubjectProps) => {
  const url = `${DOMAIN}${subjectId}`;
  return await apiHandler.delete<T>(url, options);
};

interface SubjectQuestionListParams extends SubjectListParams {
  subjectId: number | string;
}

export const getSubjectQuestionList = async <T = any>({
  subjectId,
  limit,
  offset,
  options,
}: SubjectQuestionListParams) => {
  const url = `${DOMAIN}${subjectId}/questions/?${limit !== undefined ? 'limit=' + limit : ''}${offset !== undefined ? 'offset=' + offset : ''}`;
  return await apiHandler.get<T>(url, options);
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

export const createSubjectQuestion = async <T = any>({
  subjectId,
  content,
  like = 0,
  dislike = 0,
  answer = DEFAULT_SUBJECT_QUESTION_ANWER,
  options,
}: CreateSubjectQuestionProps) => {
  const url = `${DOMAIN}${subjectId}/questions`;
  const body = {
    content,
    like,
    dislike,
    answer,
  };
  return await apiHandler.post<
    Omit<CreateSubjectQuestionProps, 'subjectId' | 'options'>,
    T
  >(url, body, options);
};
