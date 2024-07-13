export interface SubjectDetailResponse {
  id: number;
  name: string;
  imageSource: string;
  questionCount: number;
  createdAt: string;
}

export interface SubjectListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SubjectDetailResponse[];
}

export interface QuestionDetailResponseAnswer {
  id: number;
  questionId: number;
  content: string;
  isRejected: boolean;
  createdAt: string;
}

export interface QuestionDetailResponse {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  answer: QuestionDetailResponseAnswer | null;
}

export interface QuestionReactionResponse {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  answer: null | QuestionDetailResponseAnswer;
}
export interface SubjectQuestionListResponse
  extends Omit<SubjectListResponse, 'results'> {
  results: QuestionDetailResponse[];
}
