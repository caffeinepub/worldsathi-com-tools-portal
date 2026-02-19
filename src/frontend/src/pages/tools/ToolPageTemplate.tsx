import React, { useEffect } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ToolHero from '@/components/ToolHero';
import CategoryBadge from '@/components/CategoryBadge';
import ToolIntroduction from '@/components/ToolIntroduction';
import UsabilityGuide from '@/components/UsabilityGuide';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Sidebar from '@/components/Sidebar';
import { Link } from '@tanstack/react-router';
import { useTrackToolUsage } from '@/hooks/useQueries';
import type { ToolMetadata, ToolFAQ } from '@/types/tools';
import { getCategoryDisplayName } from '@/constants/categories';

interface ToolPageTemplateProps {
  tool: ToolMetadata;
  gradientFilename: string;
  faqs: ToolFAQ[];
  relatedTools: ToolMetadata[];
  children: React.ReactNode;
}

export default function ToolPageTemplate({
  tool,
  gradientFilename,
  faqs,
  relatedTools,
  children,
}: ToolPageTemplateProps) {
  const trackUsage = useTrackToolUsage();

  useEffect(() => {
    // Convert tool ID to a number for tracking
    const toolIdNum = BigInt(tool.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
    trackUsage.mutate(toolIdNum);
  }, [tool.id]);

  const breadcrumbItems = [
    {
      label: getCategoryDisplayName(tool.category),
      path: `/category/${tool.category}`,
    },
    {
      label: tool.name,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Tool Hero Section */}
      <ToolHero
        toolName={tool.name}
        categoryId={tool.category}
        gradientFilename={gradientFilename}
      />

      {/* Breadcrumbs directly under hero */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tool Introduction */}
            {tool.introduction && (
              <ToolIntroduction introduction={tool.introduction} />
            )}

            {/* Usability Guide */}
            {tool.usabilitySteps && tool.usabilitySteps.length > 0 && (
              <UsabilityGuide steps={tool.usabilitySteps} />
            )}

            {/* Tool Interface Card */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{tool.name}</CardTitle>
                  <CategoryBadge
                    categoryId={tool.category}
                    subcategory={tool.subcategory}
                  />
                </div>
              </CardHeader>
              <CardContent>{children}</CardContent>
            </Card>

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedTools.map((relatedTool) => (
                      <Link
                        key={relatedTool.id}
                        to={relatedTool.path}
                        className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {relatedTool.name}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedTool.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
