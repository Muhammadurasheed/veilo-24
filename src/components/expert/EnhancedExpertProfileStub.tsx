import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Expert } from '@/types/index';

interface EnhancedExpertProfileProps {
  expert: Expert;
}

const EnhancedExpertProfileStub: React.FC<EnhancedExpertProfileProps> = ({ expert }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Expert Profile - {expert.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Enhanced expert profile functionality is being rebuilt. Please check back soon.</p>
          <div className="mt-4">
            <p><strong>Specialization:</strong> {expert.specialization}</p>
            <p><strong>Bio:</strong> {expert.bio}</p>
            <p><strong>Verification Level:</strong> {expert.verificationLevel}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedExpertProfileStub;