import React, { useState } from 'react';
import { Principal } from '@dfinity/principal';
import AdminAuthGuard from '../../components/AdminAuthGuard';
import { useResetUserUsage } from '../../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RotateCcw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

function ResetUserStatsContent() {
  const [principalId, setPrincipalId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const resetMutation = useResetUserUsage();

  const handleReset = async () => {
    setError('');
    setSuccess('');

    // Validate principal ID
    try {
      const principal = Principal.fromText(principalId);
      
      // Call backend to reset user stats
      await resetMutation.mutateAsync(principal);
      
      setSuccess(`Successfully reset usage statistics for user: ${principalId}`);
      toast.success('User statistics reset successfully');
      setPrincipalId('');
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to reset user statistics';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const isValidPrincipal = () => {
    if (!principalId.trim()) return false;
    try {
      Principal.fromText(principalId);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Reset User Statistics
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Clear usage data for a specific user
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-white dark:bg-gray-800 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-blue-600" />
              Reset User Usage Data
            </CardTitle>
            <CardDescription>
              Enter a user's Principal ID to reset all their usage statistics. This will clear daily usage, weekly usage, total usage, and saved tools count to zero.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Success Message */}
            {success && (
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            {/* Error Message */}
            {error && (
              <Alert className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* Input Form */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="principalId" className="text-base font-semibold">
                  User Principal ID
                </Label>
                <Input
                  id="principalId"
                  type="text"
                  placeholder="Enter Principal ID (e.g., 2vxsx-fae...)"
                  value={principalId}
                  onChange={(e) => {
                    setPrincipalId(e.target.value);
                    setError('');
                    setSuccess('');
                  }}
                  className="mt-2 bg-white dark:bg-gray-700 font-mono text-sm"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  The Principal ID is a unique identifier for each user on the Internet Computer.
                </p>
              </div>

              {/* Reset Button with Confirmation */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    size="lg"
                    disabled={!isValidPrincipal() || resetMutation.isPending}
                    className="w-full"
                  >
                    {resetMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Resetting...
                      </>
                    ) : (
                      <>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset User Statistics
                      </>
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white dark:bg-gray-800">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will reset all usage statistics for the user with Principal ID:
                      <br />
                      <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block break-all">
                        {principalId}
                      </span>
                      <br />
                      <br />
                      The following data will be reset to zero:
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Daily usage count</li>
                        <li>Weekly usage count</li>
                        <li>Total usage count</li>
                        <li>Saved tools count</li>
                      </ul>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleReset}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Yes, Reset Statistics
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {/* Information Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                What happens when you reset?
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• All usage counters are set to zero</li>
                <li>• User can start fresh with their quota</li>
                <li>• Historical usage records are cleared</li>
                <li>• User profile and favorites remain unchanged</li>
              </ul>
            </div>

            {/* Back Button */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" asChild>
                <a href="/admin">← Back to Admin Dashboard</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ResetUserStats() {
  return (
    <AdminAuthGuard>
      <ResetUserStatsContent />
    </AdminAuthGuard>
  );
}
