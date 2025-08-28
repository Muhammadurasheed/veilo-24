import { useState } from 'react';
import { Expert } from '@/types/index';
import EnhancedExpertProfileStub from './EnhancedExpertProfileStub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  User,
  Star,
  Award,
  BookOpen,
  Briefcase,
  Heart,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Users,
  TrendingUp,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface EnhancedExpertProfileProps {
  expert: Expert;
  onBookSession?: () => void;
  onSendMessage?: () => void;
}

const EnhancedExpertProfile: React.FC<EnhancedExpertProfileProps> = ({ expert }) => {
  return <EnhancedExpertProfileStub expert={expert} />;
};

export default EnhancedExpertProfile;