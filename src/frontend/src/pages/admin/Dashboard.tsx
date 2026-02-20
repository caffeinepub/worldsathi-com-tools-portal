import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { LogOut, FileText, Users, MessageSquare, BarChart3, Wrench, Settings } from 'lucide-react';

export default function Dashboard() {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: '/admin/login' });
  };

  const adminSections = [
    {
      title: 'Blog Management',
      description: 'Create, edit, and manage blog posts',
      icon: FileText,
      link: '/admin/blog-management',
      color: 'text-blue-500',
    },
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: Users,
      link: '/admin/user-management',
      color: 'text-green-500',
    },
    {
      title: 'Forum Moderation',
      description: 'Moderate forum posts and discussions',
      icon: MessageSquare,
      link: '/admin/forum-moderation',
      color: 'text-purple-500',
    },
    {
      title: 'User Statistics',
      description: 'View analytics and user engagement',
      icon: BarChart3,
      link: '/admin/user-statistics',
      color: 'text-orange-500',
    },
    {
      title: 'Tools Diagnostic',
      description: 'View tool metadata and routing information',
      icon: Wrench,
      link: '/admin/tools-diagnostic',
      color: 'text-red-500',
    },
    {
      title: 'Tool Management',
      description: 'Add, edit, and delete tools',
      icon: Settings,
      link: '/admin/tool-management',
      color: 'text-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Manage your platform from here.</p>
          </div>
          <Button variant="secondary" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tools</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">147</div>
              <p className="text-xs text-muted-foreground">Across 16 categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Published articles</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => (
            <Link key={section.link} to={section.link}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${section.color}`}>
                      <section.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" asChild>
              <Link to="/admin/tool-management">
                <Settings className="mr-2 h-4 w-4" />
                Add New Tool
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/admin/blog-management">
                <FileText className="mr-2 h-4 w-4" />
                Create Blog Post
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/admin/tools-diagnostic">
                <Wrench className="mr-2 h-4 w-4" />
                View Diagnostics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
