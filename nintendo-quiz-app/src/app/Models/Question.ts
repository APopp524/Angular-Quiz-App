/**
 * Model for a question
 */
export interface Question {
  id: number;
  prompt: string;
  choices: string[];
  answer: string;
}
