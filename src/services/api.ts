import data from '../data/challenges';
import { Challenge } from '../data/types';

export const fetchChallenges = (): Promise<Challenge[]> => {
  return new Promise((resolve) => {
    // Simulate a 500ms network delay to show off the loading spinner
    setTimeout(() => {
      resolve(data as Challenge[]);
    }, 500);
  });
};