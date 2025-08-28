import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const WelcomeScreen = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Veilo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Your mental health sanctuary awaits.</p>
        <Button className="mt-4">Enter Sanctuary</Button>
      </CardContent>
    </Card>
  );
};