import type { Metadata } from "next";

type ToolMeta = {
  title: string;
  description: string;
  keywords: string;
};

// Maps each tool slug (see detailsMap in page.tsx) to its SEO metadata.
const toolMetaMap: Record<string, ToolMeta> = {
  "vision-summary": {
    title: "Business Vision Planning Tool for CEOs | Success Alchemists",
    description:
      "Define your company vision and align your team with this strategic planning tool for CEOs and growing businesses.",
    keywords:
      "vision planning, business strategy tool, CEO planning, company vision, strategic alignment",
  },
  "strengths-weaknesses-trends": {
    title: "SWOT Analysis Tool for Business Growth | Success Alchemists",
    description:
      "Identify strengths, weaknesses, and market trends to improve strategy and drive business growth effectively.",
    keywords:
      "SWOT analysis, business strategy, strengths, weaknesses, market trends, business growth",
  },
  "rockefeller-habits-checklist": {
    title: "Rockefeller Habits Checklist for Scaling Businesses",
    description:
      "Implement proven habits used by high-growth companies to improve execution, alignment, and scalability.",
    keywords:
      "Rockefeller habits, scaling business, execution framework, business habits, growth systems",
  },
  "function-accountability-chart": {
    title: "Function Accountability Chart for Business Teams",
    description:
      "Define roles and responsibilities clearly to improve team performance and business execution.",
    keywords:
      "accountability chart, team roles, business execution, organization structure, team performance",
  },
  "process-accountability-chart": {
    title: "Process Accountability Tool for Business Operations",
    description:
      "Improve operational efficiency with clear process accountability frameworks for growing companies.",
    keywords:
      "process accountability, business operations, operational efficiency, process management",
  },
  "cash-acceleration-strategies": {
    title: "Cash Flow & Revenue Growth Strategies for Businesses",
    description:
      "Boost cash flow and revenue with proven strategies designed for scaling companies and business owners.",
    keywords:
      "cash flow strategies, revenue growth, business finance, scaling companies, business growth",
  },
  "who-what-when": {
    title: "Execution Planning Tool for Business Teams | Success Alchemists",
    description:
      "Improve execution with clear task ownership, timelines, and accountability for business growth.",
    keywords:
      "execution planning, business execution, task management, accountability, growth planning",
  },
  "the-power-of-one": {
    title: "Focus Strategy Tool for Business Growth | Success Alchemists",
    description:
      "Align your team with one clear priority to drive faster growth and better execution.",
    keywords:
      "focus strategy, business priorities, team alignment, execution strategy, growth focus",
  },
  "talent-assessment-chart": {
    title: "Talent Assessment Tool for Business Leaders",
    description:
      "Evaluate team performance and build high-performing teams with this strategic assessment tool.",
    keywords:
      "talent assessment, team performance, leadership tools, employee evaluation, business teams",
  },
  "7-strata": {
    title: "7 Strata Framework for Business Strategy | Success Alchemists",
    description:
      "Build a strong business strategy using the 7 Strata framework designed for CEOs and scaling companies.",
    keywords:
      "7 strata, business strategy framework, CEO strategy, scaling business, growth planning",
  },
  "one-page-strategic-plan": {
    title: "One Page Strategic Plan for Business Growth | Success Alchemists",
    description:
      "Create a clear and actionable business strategy with this one-page planning framework for CEOs.",
    keywords:
      "one page strategic plan, business planning, CEO framework, strategic growth, planning tools",
  },
  "one-page-personal-plan": {
    title: "Personal Growth Plan for CEOs & Founders | Success Alchemists",
    description:
      "Align personal goals with business growth using a structured planning framework for leaders.",
    keywords:
      "personal growth plan, leadership development, CEO growth, founder goals, business leadership",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = toolMetaMap[slug];
  const canonicalUrl = `https://www.success-alchemists.com/toolDetail/${slug}`;

  if (!meta) {
    // Fall back to a sensible default for unmapped tool slugs.
    return {
      title: "Business Growth Toolkit | Success Alchemists",
      description:
        "Explore practical tools and frameworks to help CEOs and founders scale their businesses with Success Alchemists.",
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
    },
  };
}

export default function ToolDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
