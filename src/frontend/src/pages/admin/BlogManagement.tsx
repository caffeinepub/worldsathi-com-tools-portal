import React from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { BookOpen, Home } from 'lucide-react';

export default function BlogManagement() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Blog Management</h1>
            <p className="text-muted-foreground">
              Create, edit, and manage blog posts
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/admin/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-2xl">Blog Management</CardTitle>
              <CardDescription>Manage your blog content</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              This feature is coming soon!
            </p>
            <p className="text-sm text-muted-foreground">
              Blog management functionality will be available in a future update.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
