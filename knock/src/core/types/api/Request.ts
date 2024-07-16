export interface APIOptions {
  options?: Omit<RequestInit, 'method' | 'body'>;
}

export interface AnswerParams extends APIOptions {
  subjectId: number | string;
}

export interface AnswerHasBodyParams extends AnswerParams {
  body: AnswerBody;
}

export interface AnswerBody {
  content: string;
  isRejected: boolean;
}

export interface QuestionDetailsProps extends APIOptions {
  questionId: number | string;
}

export interface QuestionReactionProps extends APIOptions {
  questionId: number | string;
  type: 'like' | 'dislike';
}

export interface QuestionAnswerProps extends APIOptions {
  questionId: number | string;
  content: string;
  isRejected: boolean;
}

export interface SubjectListParams extends APIOptions {
  sort?: 'name' | 'time';
  limit?: number;
  offset?: number;
}

export interface SubjectGetDetailParams extends APIOptions {
  subjectId: number | string;
}

export interface CreateSubjectProps extends APIOptions {
  name: string;
}

export interface DeleteSubjectProps extends APIOptions {
  subjectId: number | string;
}

export interface SubjectQuestionListParams extends SubjectListParams {
  subjectId: number | string;
}

export interface CreateSubjectQuestionAnswer {
  content: string;
  isRejected: boolean;
}

export interface CreateSubjectQuestionProps extends APIOptions {
  subjectId: number | string;
  content: string;
  like?: number;
  dislike?: number;
  answer?: CreateSubjectQuestionAnswer;
}
