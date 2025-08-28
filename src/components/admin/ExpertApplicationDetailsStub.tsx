import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExpertApplicationDetailsStubProps {
  expert: any;
  onVerify?: (expertId: string, decision: 'approved' | 'rejected') => void;
  onClose?: () => void;
}

const ExpertApplicationDetailsStub: React.FC<ExpertApplicationDetailsStubProps> = ({ expert, onVerify, onClose }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Expert Application Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Expert application details are being rebuilt. Please check back soon.</p>
          <p>Expert: {expert?.name || 'Unknown'}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertApplicationDetailsStub;