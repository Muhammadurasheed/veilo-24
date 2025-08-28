import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const OnboardingFlow = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Veilo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Get started with your mental health journey.</p>
        <Button onClick={onComplete} className="mt-4">Continue</Button>
      </CardContent>
    </Card>
  );
};