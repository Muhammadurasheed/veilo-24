import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExpertAnalyticsProps {
  expertId?: string;
}

const ExpertAnalyticsStub: React.FC<ExpertAnalyticsProps> = ({ expertId }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Expert Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Expert analytics functionality is being rebuilt. Please check back soon.</p>
          {expertId && <p>Expert ID: {expertId}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertAnalyticsStub;