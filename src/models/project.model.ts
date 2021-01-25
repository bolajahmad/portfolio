export interface ProjectModel {
  id: string;
  title: string;
  author: string;
  stacks: string[];
  description?: string;
  duration?: number;
}