export type Priority = 'low' | 'medium' | 'high' | 'critical';
export type ReportStatus = 'pending' | 'investigating' | 'resolved' | 'dismissed';
export type ReportCategory = 'physical_crime' | 'cybercrime' | 'fraud' | 'phishing' | 'harassment' | 'community_threat';

export interface IncidentReport {
  id: string;
  trackingId: string;
  category: ReportCategory;
  description: string;
  location?: {
    lat: number;
    lng: number;
    address?: string;
  };
  priority: Priority;
  status: ReportStatus;
  createdAt: string;
  isAnonymous: boolean;
  voiceNoteUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
