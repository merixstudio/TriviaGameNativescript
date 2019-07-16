import { Question } from '~/app/module/core/entity/question/question';

export interface QuestionsResponse {
  response_code: number,
  results: Question[],
}
