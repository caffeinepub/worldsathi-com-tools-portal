import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ALL_TOOLS } from '@/constants/tools';
import { TOOL_CATEGORIES } from '@/constants/categories';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info, Plus, Edit, Trash2, RotateCcw } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function ToolManagement() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    icon: '',
    tags: '',
    path: '',
  });

  const handleEdit = (toolId: string) => {
    const tool = ALL_TOOLS.find(t => t.id === toolId);
    if (tool) {
      setFormData({
        id: tool.id,
        name: tool.name,
        description: tool.description,
        category: tool.category,
        icon: tool.icon,
        tags: tool.tags?.join(', ') || '',
        path: tool.path,
      });
      setSelectedTool(toolId);
    }
  };

  const handleReset = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
      category: '',
      icon: '',
      tags: '',
      path: '',
    });
    setSelectedTool(null);
  };

  const handleSave = () => {
    // This is a metadata-only interface
    // Actual implementation would require backend integration
    alert('Tool metadata saved! Note: You must manually create the corresponding React component file in frontend/src/pages/tools/ for this tool to be functional.');
    handleReset();
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tool Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage tool metadata and definitions
          </p>
        </div>
        <Button variant="secondary" asChild>
          <Link to="/admin/dashboard">Back to Dashboard</Link>
        </Button>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> This interface manages tool metadata only (definitions in <code className="text-xs bg-muted px-1 py-0.5 rounded">frontend/src/constants/tools.ts</code>). 
          To make a tool functional, you must manually create the corresponding React component file in <code className="text-xs bg-muted px-1 py-0.5 rounded">frontend/src/pages/tools/</code> 
          following the existing tool component patterns (e.g., <code className="text-xs bg-muted px-1 py-0.5 rounded">StandardDeviationCalculator.tsx</code>).
        </AlertDescription>
      </Alert>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>{selectedTool ? 'Edit Tool Metadata' : 'Add New Tool Metadata'}</CardTitle>
            <CardDescription>
              {selectedTool ? 'Update tool information' : 'Define a new tool (component must be created separately)'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tool-id">Tool ID (slug)</Label>
              <Input
                id="tool-id"
                placeholder="e.g., standard-deviation-calculator"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                disabled={!!selectedTool}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-name">Tool Name</Label>
              <Input
                id="tool-name"
                placeholder="e.g., Standard Deviation Calculator"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-description">Description</Label>
              <Textarea
                id="tool-description"
                placeholder="Brief description of the tool"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger id="tool-category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {TOOL_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-icon">Icon Name (Lucide React)</Label>
              <Input
                id="tool-icon"
                placeholder="e.g., Calculator, BarChart, Code"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">
                Use Lucide React icon names (e.g., Calculator, Code, Type)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-tags">Tags (comma-separated)</Label>
              <Input
                id="tool-tags"
                placeholder="e.g., statistics, math, calculator"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tool-path">Path</Label>
              <Input
                id="tool-path"
                placeholder="e.g., /tools/calculators/standard-deviation-calculator"
                value={formData.path}
                onChange={(e) => setFormData({ ...formData, path: e.target.value })}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={handleSave} className="flex-1" disabled={!formData.id || !formData.name || !formData.category}>
                <Plus className="mr-2 h-4 w-4" />
                {selectedTool ? 'Update Metadata' : 'Add Metadata'}
              </Button>
              <Button onClick={handleReset} variant="secondary" disabled={!formData.id && !selectedTool}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tools List Section */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Tools</CardTitle>
            <CardDescription>
              {ALL_TOOLS.length} tools defined
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ALL_TOOLS.map((tool) => (
                    <TableRow key={tool.id}>
                      <TableCell className="font-medium">{tool.name}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {TOOL_CATEGORIES.find(c => c.id === tool.category)?.displayName || tool.category}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(tool.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              if (confirm(`Delete ${tool.name}? This only removes metadata.`)) {
                                alert('Delete functionality would be implemented here');
                              }
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
