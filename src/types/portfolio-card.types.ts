import { ReactNode } from 'react';

export interface PortfolioCardItem {
  title: string;
  description: string;
  imageUrl: string;
  badges: { text: string; variant?: 'default' | 'secondary' | 'destructive' | 'outline' }[];
  modalContent?: ReactNode;
}
