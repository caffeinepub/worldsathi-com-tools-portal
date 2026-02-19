import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSaveCallerUserProfile } from '../hooks/useQueries';
import { toast } from 'sonner';
import { Link } from '@tanstack/react-router';
import { Calculator, Zap, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const isAuthenticated = !!identity;

  useEffect(() => {
    if (isAuthenticated && !profileLoading && isFetched && userProfile === null) {
      setShowProfileSetup(true);
    }
  }, [isAuthenticated, profileLoading, isFetched, userProfile]);

  const handleSaveProfile = async () => {
    if (!displayName.trim()) {
      toast.error('Please enter your name');
      return;
    }

    try {
      await saveProfile.mutateAsync({
        displayName: displayName.trim(),
        bio: '',
        favoriteTools: [],
        memberships: [],
        badges: [],
      });
      setShowProfileSetup(false);
      toast.success('Profile created successfully!');
    } catch (error) {
      toast.error('Failed to create profile');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-16">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              You need to be logged in with Internet Identity to view your dashboard, saved tools, and usage history.
            </p>
            <Button asChild className="w-full">
              <Link to="/">Go to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (profileLoading) {
    return (
      <div className="container py-16">
        <div className="text-center">Loading your dashboard...</div>
      </div>
    );
  }

  return (
    <>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {userProfile?.displayName || 'User'}!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saved Tools</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProfile?.favoriteTools?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Tools in your collection</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usage</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Tools used this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProfile?.badges?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Achievements earned</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with our essential tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button asChild variant="outline" className="h-auto flex-col items-start p-4">
                <Link to="/tools/percentage-calculator">
                  <Calculator className="h-5 w-5 mb-2" />
                  <span className="font-semibold">Percentage Calculator</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col items-start p-4">
                <Link to="/tools/password-generator">
                  <Zap className="h-5 w-5 mb-2" />
                  <span className="font-semibold">Password Generator</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col items-start p-4">
                <Link to="/tools/text-analyzer">
                  <TrendingUp className="h-5 w-5 mb-2" />
                  <span className="font-semibold">Text Analyzer</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto flex-col items-start p-4">
                <Link to="/tools/pomodoro-timer">
                  <Calculator className="h-5 w-5 mb-2" />
                  <span className="font-semibold">Pomodoro Timer</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showProfileSetup} onOpenChange={setShowProfileSetup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to Worldsathi!</DialogTitle>
            <DialogDescription>
              Let's set up your profile. What should we call you?
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                placeholder="Enter your name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSaveProfile();
                  }
                }}
              />
            </div>
            <Button onClick={handleSaveProfile} className="w-full" disabled={saveProfile.isPending}>
              {saveProfile.isPending ? 'Creating Profile...' : 'Continue'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
