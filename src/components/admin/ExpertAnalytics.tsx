import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import ExpertAnalyticsStub from '@/components/admin/ExpertAnalyticsStub';
import { useToast } from '@/hooks/use-toast';
import { 
  TrendingUp, 
  Clock, 
  Star, 
  DollarSign, 
  Users, 
  CheckCircle,
  Award,
  Activity
} from 'lucide-react';

interface ExpertAnalytics {
  expertId: string;
  totalSessions: number;
  completedSessions: number;
  completionRate: number;
  averageRating: number;
  totalRevenue: number;
  averageResponseTime: number;
  totalHours: number;
  sessionMetrics: any[];
  timeframe: string;
}

interface ExpertAnalyticsProps {
  expertId?: string;
}

const ExpertAnalytics = ({ expertId }: ExpertAnalyticsProps) => {
  return <ExpertAnalyticsStub expertId={expertId} />;
};

export default ExpertAnalytics;