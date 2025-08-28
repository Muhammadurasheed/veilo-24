import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const OnboardingFlow = ({ onComplete }: { onComplete?: () => void }) => {
  const [step, setStep] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Veilo</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={onComplete}>Get Started</Button>
      </CardContent>
    </Card>
  );
};