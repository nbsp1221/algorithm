export type Level =
  | 'Bronze V'
  | 'Bronze IV'
  | 'Bronze III'
  | 'Bronze II'
  | 'Bronze I'
  | 'Silver V'
  | 'Silver IV'
  | 'Silver III'
  | 'Silver II'
  | 'Silver I'
  | 'Gold V'
  | 'Gold IV'
  | 'Gold III'
  | 'Gold II'
  | 'Gold I'
  | 'Platinum V'
  | 'Platinum IV'
  | 'Platinum III'
  | 'Platinum II'
  | 'Platinum I'
  | 'Diamond V'
  | 'Diamond IV'
  | 'Diamond III'
  | 'Diamond II'
  | 'Diamond I'
  | 'Ruby V'
  | 'Ruby IV'
  | 'Ruby III'
  | 'Ruby II'
  | 'Ruby I';

export type Tag =
  | 'Backtracking'
  | 'BFS'
  | 'Binary Search'
  | 'Branch and Bound'
  | 'Coordinate Compression'
  | 'DFS'
  | 'Dijkstra\'s Algorithm'
  | 'Divide and Conquer'
  | 'Dynamic Programming'
  | 'Graph'
  | 'Longest Increasing Subsequence'
  | 'Mathematics'
  | 'Recursion'
  | 'Simulation'
  | 'Sorting';

export interface Challenge {
  id: number;
  title: string;
  extension: string;
  level: Level;
  tags: Tag[];
}

export type ChallengeData = Pick<Challenge, 'title' | 'level' | 'tags'>;
export type ChallengeFile = Pick<Challenge, 'id' | 'extension'>;