// Minimal API exports to fix build errors
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Re-export common types from main types file
export type { DocumentType } from '../types/index';

export const AnalyticsApi = {
  getPlatformOverview: async (): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getExpertMetrics: async (): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getExpertAnalytics: async (expertId: string, timeframe: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getExpertRankings: async (sortBy: string, limit: number): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
};

export const AdminApi = {
  verifyExpert: async (expertId: string, verificationData: any): Promise<ApiResponse<{ success: boolean; }>> => ({ success: false, error: 'Not implemented' }),
  getFlaggedContent: async (): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
  resolveFlag: async (contentId: string, action: "approve" | "remove"): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getPendingExperts: async (): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
  getAllExperts: async (): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
  getExpertsAdvanced: async (filters?: any): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
  bulkExpertAction: async (expertIds: string[], action: string, data?: any): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getPlatformOverview: async (): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
};

export const UserApi = {
  registerExpertAccount: async (expertData: any): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  login: async (credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string; user: any; refreshToken?: string }>> => ({ success: false, error: 'Not implemented' }),
  updateProfile: async (profileData: any): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  updateAvatar: async (avatarUrl: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  refreshToken: async (refreshToken: string): Promise<ApiResponse<{ token: string; user: any; refreshToken?: string }>> => ({ success: false, error: 'Not implemented' }),
  register: async (userData: any): Promise<ApiResponse<{ token: string; user: any }>> => ({ success: false, error: 'Not implemented' }),
  createAnonymousUser: async (): Promise<ApiResponse<{ token: string; user: any }>> => ({ success: false, error: 'Not implemented' }),
};

export const SanctuaryApi = {
  createSession: async (sessionData: ApiSanctuaryCreateRequest): Promise<ApiResponse<{ id: string; topic: string; description: string; emoji: string; expiresAt: string; hostToken?: string; }>> => ({ success: false, error: 'Not implemented' }),
  getSession: async (sessionId: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  submitMessage: async (sessionId: string, message: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  getSubmissions: async (sessionId: string): Promise<ApiResponse<any[]>> => ({ success: false, error: 'Not implemented' }),
  joinSession: async (sessionId: string, alias: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  leaveSession: async (sessionId: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  flagSession: async (sessionId: string, reason: string): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
};

export const LiveSanctuaryApi = {
  createLiveSession: async (sessionData: any): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
  joinSession: async (sessionId: string, userData: any): Promise<ApiResponse<any>> => ({ success: false, error: 'Not implemented' }),
};

export const GeminiApi = {
  refinePost: async () => ({ success: false, error: 'Not implemented' }),
};

export const apiRequest = async () => ({ success: false, error: 'Not implemented' });

// Export types
export interface ApiSanctuaryCreateRequest {
  topic: string;
  description?: string;
  emoji?: string;
  sanctuaryType?: string;
}

export interface SanctuaryMessage {
  id: string;
  participantId: string;
  participantAlias: string;
  content: string;
  timestamp: string;
  type: "text" | "system" | "emoji-reaction";
}

export interface UserCreationState {
  creating: boolean;
  error?: string;
}

// Token management functions
export const getAuthToken = (): string | null => {
  // Priority: admin_token > veilo-auth-token > token
  return localStorage.getItem('admin_token') || 
         localStorage.getItem('veilo-auth-token') || 
         localStorage.getItem('token');
};

export const setAdminToken = (token: string): void => {
  localStorage.setItem('admin_token', token);
  localStorage.setItem('veilo-auth-token', token);
  localStorage.setItem('token', token);
  // Update axios default header
  if (typeof window !== 'undefined') {
    try {
      const axios = require('axios');
      axios.defaults.headers.common['x-auth-token'] = token;
    } catch (e) {
      // Ignore axios import errors
    }
  }
};

export const removeAuthToken = (): void => {
  localStorage.removeItem('veilo-auth-token');
  localStorage.removeItem('admin_token');
  localStorage.removeItem('token');
  if (typeof window !== 'undefined') {
    try {
      const axios = require('axios');
      delete axios.defaults.headers.common['x-auth-token'];
    } catch (e) {
      // Ignore axios import errors
    }
  }
};