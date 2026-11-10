export interface OptionItem {
  id: string;
  label: string;
  text: string;
  iconKey: string;
  isCorrect: boolean;
  feedback: string;
}

export interface DoaItem {
  title: string;
  arab: string;
  artinya: string;
  perowi: string;
}

export interface PosItem {
  id: number;
  name: string;
  shortTitle: string;
  iconType: 'bed' | 'tap' | 'lunchbox' | 'moon' | 'friends' | 'star' | 'house' | 'book' | 'mosque' | 'trophy';
  situationTitle: string;
  situationDesc: string;
  situationTag: string;
  question: string;
  options: OptionItem[];
  doa: DoaItem;
  bonusDoa?: DoaItem;
  xPercent: number; // For map positioning
  yPercent: number;
}

export interface ExamQuestion {
  id: number;
  posId: number;
  posName: string;
  question: string;
  options: {
    id: string;
    label: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface SantriProfile {
  name: string;
  completedPos: number[]; // e.g. [1, 2, 3]
  stars: number; // 0 - 10
  selectedAvatar: 'boy' | 'girl';
  homeworkPos: number[]; // List of pos assigned as PR by teacher
  examScore: number | null;
  hasSultanCertificate: boolean;
  certificateDate: string | null;
  soundEnabled: boolean;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  stars: number;
  isSultan: boolean;
  avatar: 'boy' | 'girl';
  date: string;
  isCurrentUser?: boolean;
}
