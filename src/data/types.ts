export interface Challenge {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Health' | 'Creativity' | 'Learning' | 'Fitness';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}