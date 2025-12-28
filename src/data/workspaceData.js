const workspaceData = {
  teams: [
    {
      id: "team-1",
      name: "Engineering",
      projects: [
        {
          id: "project-1-1",
          name: "Dashboard Revamp",
          tasks: [
            { id: "task-1-1-1", title: "Design layout", status: "done" },
            { id: "task-1-1-2", title: "Build components", status: "in-progress" },
            { id: "task-1-1-3", title: "Integration testing", status: "todo" },
            { id: "task-1-1-4", title: "API refinement", status: "todo" },
            { id: "task-1-1-5", title: "Bug fixing", status: "todo" },
            { id: "task-1-1-6", title: "Final QA", status: "todo" },
          ],
        },
        {
          id: "project-1-2",
          name: "Auth System",
          tasks: [
            { id: "task-1-2-1", title: "OAuth setup", status: "done" },
            { id: "task-1-2-2", title: "JWT implementation", status: "done" },
            { id: "task-1-2-3", title: "Login UI", status: "done" },
            { id: "task-1-2-4", title: "Password Reset", status: "done" },
            { id: "task-1-2-5", title: "MFA Integration", status: "in-progress" },
          ],
        },
        {
          id: "project-1-3",
          name: "Mobile App Port",
          tasks: [
            { id: "task-1-3-1", title: "Environment Setup", status: "done" },
            { id: "task-1-3-2", title: "Push Notifications", status: "in-progress" },
            { id: "task-1-3-3", title: "Offline Storage", status: "in-progress" },
            { id: "task-1-3-4", title: "UI Components", status: "todo" },
            { id: "task-1-3-5", title: "Biometric Login", status: "todo" },
            { id: "task-1-3-6", title: "App Store Assets", status: "todo" },
          ],
        },
        {
          id: "project-1-4",
          name: "Infrastructure",
          tasks: [
            { id: "task-1-4-1", title: "AWS Setup", status: "done" },
            { id: "task-1-4-2", title: "Docker Config", status: "done" },
            { id: "task-1-4-3", title: "CI/CD Pipeline", status: "done" },
            { id: "task-1-4-4", title: "Load Balancing", status: "done" },
            { id: "task-1-4-5", title: "Log Monitoring", status: "done" },
          ],
        },
      ],
    },
    {
      id: "team-2",
      name: "Marketing",
      projects: [
        {
          id: "project-2-1",
          name: "Q1 Campaign",
          tasks: [
            { id: "task-2-1-1", title: "Ad Copywriting", status: "done" },
            { id: "task-2-1-2", title: "Visual Design", status: "done" },
            { id: "task-2-1-3", title: "Video Editing", status: "in-progress" },
            { id: "task-2-1-4", title: "Email Sequences", status: "todo" },
            { id: "task-2-1-5", title: "Tracking Pixels", status: "todo" },
          ],
        },
        {
          id: "project-2-2",
          name: "SEO Audit",
          tasks: [
            { id: "task-2-2-1", title: "Site Crawl", status: "done" },
            { id: "task-2-2-2", title: "Keyword Research", status: "done" },
            { id: "task-2-2-3", title: "Meta Updates", status: "done" },
            { id: "task-2-2-4", title: "Backlink Plan", status: "done" },
            { id: "task-2-2-5", title: "Speed Optimization", status: "done" },
          ],
        },
        {
          id: "project-2-3",
          name: "Brand Refresh",
          tasks: [
            { id: "task-2-3-1", title: "Moodboard", status: "done" },
            { id: "task-2-3-2", title: "Logo Concepts", status: "in-progress" },
            { id: "task-2-3-3", title: "Color Palette", status: "in-progress" },
            { id: "task-2-3-4", title: "Typeface Selection", status: "todo" },
            { id: "task-2-3-5", title: "Brand Manual", status: "todo" },
          ],
        },
        {
          id: "project-2-4",
          name: "Influencer Launch",
          tasks: [
            { id: "task-2-4-1", title: "Scouting", status: "done" },
            { id: "task-2-4-2", title: "Contracting", status: "in-progress" },
            { id: "task-2-4-3", title: "Sample Shipping", status: "todo" },
            { id: "task-2-4-4", title: "Content Review", status: "todo" },
            { id: "task-2-4-5", title: "Live Tracking", status: "todo" },
          ],
        },
        {
          id: "project-2-5",
          name: "Webinar Series",
          tasks: [
            { id: "task-2-5-1", title: "Speaker Selection", status: "todo" },
            { id: "task-2-5-2", title: "Deck Preparation", status: "todo" },
            { id: "task-2-5-3", title: "Registration Page", status: "todo" },
            { id: "task-2-5-4", title: "Zoom Setup", status: "todo" },
            { id: "task-2-5-5", title: "Post-event Email", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-3",
      name: "Design",
      projects: [
        {
          id: "project-3-1",
          name: "UI Kit Expansion",
          tasks: [
            { id: "task-3-1-1", title: "Dark Mode Colors", status: "done" },
            { id: "task-3-1-2", title: "Data Grid UI", status: "done" },
            { id: "task-3-1-3", title: "Chart Library", status: "in-progress" },
            { id: "task-3-1-4", title: "Export Assets", status: "todo" },
            { id: "task-3-1-5", title: "Documentation", status: "todo" },
          ],
        },
        {
          id: "project-3-2",
          name: "Mobile Prototype",
          tasks: [
            { id: "task-3-2-1", title: "User Flows", status: "done" },
            { id: "task-3-2-2", title: "Wireframing", status: "done" },
            { id: "task-3-2-3", title: "Hi-Fi Design", status: "done" },
            { id: "task-3-2-4", title: "Interactions", status: "done" },
            { id: "task-3-2-5", title: "Handover", status: "done" },
          ],
        },
        {
          id: "project-3-3",
          name: "Iconography",
          tasks: [
            { id: "task-3-3-1", title: "System Icons", status: "in-progress" },
            { id: "task-3-3-2", title: "Illustration Set", status: "in-progress" },
            { id: "task-3-3-3", title: "SVG Optimization", status: "todo" },
            { id: "task-3-3-4", title: "React Components", status: "todo" },
            { id: "task-3-3-5", title: "Library Sync", status: "todo" },
          ],
        },
        {
          id: "project-3-4",
          name: "Landing Page V2",
          tasks: [
            { id: "task-3-4-1", title: "Hero Section", status: "done" },
            { id: "task-3-4-2", title: "Pricing Table", status: "in-progress" },
            { id: "task-3-4-3", title: "Testimonials", status: "todo" },
            { id: "task-3-4-4", title: "Responsive Check", status: "todo" },
            { id: "task-3-4-5", title: "Asset Export", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-4",
      name: "Product",
      projects: [
        {
          id: "project-4-1",
          name: "Roadmap 2026",
          tasks: [
            { id: "task-4-1-1", title: "Stakeholder Interviews", status: "done" },
            { id: "task-4-1-2", title: "Budget Analysis", status: "done" },
            { id: "task-4-1-3", title: "Market Research", status: "in-progress" },
            { id: "task-4-1-4", title: "Prioritization Matrix", status: "todo" },
            { id: "task-4-1-5", title: "Board Presentation", status: "todo" },
          ],
        },
        {
          id: "project-4-2",
          name: "User Feedback",
          tasks: [
            { id: "task-4-2-1", title: "Survey Launch", status: "done" },
            { id: "task-4-2-2", title: "Data Cleaning", status: "done" },
            { id: "task-4-2-3", title: "Sentiment Analysis", status: "done" },
            { id: "task-4-2-4", title: "Summary Report", status: "done" },
            { id: "task-4-2-5", title: "Action Items", status: "done" },
          ],
        },
        {
          id: "project-4-3",
          name: "Feature Discovery",
          tasks: [
            { id: "task-4-3-1", title: "PRD Drafting", status: "in-progress" },
            { id: "task-4-3-2", title: "Technical Review", status: "in-progress" },
            { id: "task-4-3-3", title: "UX Validation", status: "todo" },
            { id: "task-4-3-4", title: "Risk Assessment", status: "todo" },
            { id: "task-4-3-5", title: "Final Approval", status: "todo" },
          ],
        },
        {
          id: "project-4-4",
          name: "Competitive Intel",
          tasks: [
            { id: "task-4-4-1", title: "Competitor Tracking", status: "done" },
            { id: "task-4-4-2", title: "Pricing Audit", status: "in-progress" },
            { id: "task-4-4-3", title: "Feature Gap Analysis", status: "todo" },
            { id: "task-4-4-4", title: "Market Mapping", status: "todo" },
            { id: "task-4-4-5", title: "Product Positioning", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-5",
      name: "Sales",
      projects: [
        {
          id: "project-5-1",
          name: "Enterprise Deals",
          tasks: [
            { id: "task-5-1-1", title: "Lead Generation", status: "done" },
            { id: "task-5-1-2", title: "Initial Outreach", status: "in-progress" },
            { id: "task-5-1-3", title: "Sales Demo", status: "todo" },
            { id: "task-5-1-4", title: "Proposal Draft", status: "todo" },
            { id: "task-5-1-5", title: "Contract Negotiation", status: "todo" },
          ],
        },
        {
          id: "project-5-2",
          name: "CRM Optimization",
          tasks: [
            { id: "task-5-2-1", title: "Data Cleanup", status: "done" },
            { id: "task-5-2-2", title: "Automated Workflows", status: "done" },
            { id: "task-5-2-3", title: "Lead Scoring", status: "done" },
            { id: "task-5-2-4", title: "Reporting Dashboard", status: "done" },
            { id: "task-5-2-5", title: "Team Training", status: "done" },
          ],
        },
        {
          id: "project-5-3",
          name: "Q4 Targets",
          tasks: [
            { id: "task-5-3-1", title: "Pipeline Review", status: "done" },
            { id: "task-5-3-2", title: "Closing Sprint", status: "in-progress" },
            { id: "task-5-3-3", title: "Renewal Tracking", status: "in-progress" },
            { id: "task-5-3-4", title: "Client Dinners", status: "todo" },
            { id: "task-5-3-5", title: "Forecast Update", status: "todo" },
          ],
        },
        {
          id: "project-5-4",
          name: "Channel Partners",
          tasks: [
            { id: "task-5-4-1", title: "Partner Scouting", status: "todo" },
            { id: "task-5-4-2", title: "Program Terms", status: "todo" },
            { id: "task-5-4-3", title: "Kickoff Sync", status: "todo" },
            { id: "task-5-4-4", title: "Asset Sharing", status: "todo" },
            { id: "task-5-4-5", title: "Success Review", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-6",
      name: "Customer Success",
      projects: [
        {
          id: "project-6-1",
          name: "Knowledge Base",
          tasks: [
            { id: "task-6-1-1", title: "Audit Articles", status: "done" },
            { id: "task-6-1-2", title: "Write Setup Guide", status: "in-progress" },
            { id: "task-6-1-3", title: "Record Loom Videos", status: "in-progress" },
            { id: "task-6-1-4", title: "Update FAQs", status: "todo" },
            { id: "task-6-1-5", title: "Translate to Spanish", status: "todo" },
          ],
        },
        {
          id: "project-6-2",
          name: "Churn Prevention",
          tasks: [
            { id: "task-6-2-1", title: "Analyze Dropouts", status: "done" },
            { id: "task-6-2-2", title: "Risk Flagging", status: "done" },
            { id: "task-6-2-3", title: "Direct Outreach", status: "done" },
            { id: "task-6-2-4", title: "Feedback Loop", status: "done" },
            { id: "task-6-2-5", title: "Retention Bonus", status: "done" },
          ],
        },
        {
          id: "project-6-3",
          name: "Onboarding V3",
          tasks: [
            { id: "task-6-3-1", title: "Step 1 UI", status: "in-progress" },
            { id: "task-6-3-2", title: "Welcome Email", status: "in-progress" },
            { id: "task-6-3-3", title: "Tooltips Setup", status: "in-progress" },
            { id: "task-6-3-4", title: "Analytics Tracking", status: "todo" },
            { id: "task-6-3-5", title: "A/B Testing", status: "todo" },
          ],
        },
        {
          id: "project-6-4",
          name: "VIP Support",
          tasks: [
            { id: "task-6-4-1", title: "Dedicated Slack", status: "todo" },
            { id: "task-6-4-2", title: "SLA Definition", status: "todo" },
            { id: "task-6-4-3", title: "Escalation Path", status: "todo" },
            { id: "task-6-4-4", title: "Quarterly Reviews", status: "todo" },
            { id: "task-6-4-5", title: "Renewal Planning", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-7",
      name: "Human Resources",
      projects: [
        {
          id: "project-7-1",
          name: "Hiring: Tech",
          tasks: [
            { id: "task-7-1-1", title: "Source Frontend", status: "done" },
            { id: "task-7-1-2", title: "Source Backend", status: "in-progress" },
            { id: "task-7-1-3", title: "Schedule Panels", status: "todo" },
            { id: "task-7-1-4", title: "Code Reviews", status: "todo" },
            { id: "task-7-1-5", title: "Offer Letters", status: "todo" },
          ],
        },
        {
          id: "project-7-2",
          name: "Policy Update",
          tasks: [
            { id: "task-7-2-1", title: "Remote Work Rule", status: "done" },
            { id: "task-7-2-2", title: "Equipment Budget", status: "done" },
            { id: "task-7-2-3", title: "Time Off Policy", status: "done" },
            { id: "task-7-2-4", title: "Travel Policy", status: "done" },
            { id: "task-7-2-5", title: "Handbook Update", status: "done" },
          ],
        },
        {
          id: "project-7-3",
          name: "Culture Event",
          tasks: [
            { id: "task-7-3-1", title: "Theme Selection", status: "done" },
            { id: "task-7-3-2", title: "Catering Booking", status: "in-progress" },
            { id: "task-7-3-3", title: "Venue Rental", status: "in-progress" },
            { id: "task-7-3-4", title: "Activity List", status: "todo" },
            { id: "task-7-3-5", title: "Gift Sourcing", status: "todo" },
          ],
        },
        {
          id: "project-7-4",
          name: "Annual Review",
          tasks: [
            { id: "task-7-4-1", title: "Prep Forms", status: "todo" },
            { id: "task-7-4-2", title: "Self-Appraisal", status: "todo" },
            { id: "task-7-4-3", title: "Manager Reviews", status: "todo" },
            { id: "task-7-4-4", title: "Salary Benchmarking", status: "todo" },
            { id: "task-7-4-5", title: "1:1 Meetings", status: "todo" },
          ],
        },
      ],
    },
    {
      id: "team-8",
      name: "Finance",
      projects: [
        {
          id: "project-8-1",
          name: "Annual Audit",
          tasks: [
            { id: "task-8-1-1", title: "Internal Checks", status: "done" },
            { id: "task-8-1-2", title: "Receipt Audit", status: "in-progress" },
            { id: "task-8-1-3", title: "Tax Compliance", status: "todo" },
            { id: "task-8-1-4", title: "Filing Papers", status: "todo" },
            { id: "task-8-1-5", title: "Final Report", status: "todo" },
          ],
        },
        {
          id: "project-8-2",
          name: "Payroll System",
          tasks: [
            { id: "task-8-2-1", title: "Vendor Review", status: "done" },
            { id: "task-8-2-2", title: "Data Migration", status: "done" },
            { id: "task-8-2-3", title: "UAT Testing", status: "done" },
            { id: "task-8-2-4", title: "Admin Training", status: "done" },
            { id: "task-8-2-5", title: "Go Live", status: "done" },
          ],
        },
        {
          id: "project-8-3",
          name: "Budgeting 2026",
          tasks: [
            { id: "task-8-3-1", title: "Department Goals", status: "in-progress" },
            { id: "task-8-3-2", title: "Historical Spend", status: "in-progress" },
            { id: "task-8-3-3", title: "Inflation Adjust", status: "in-progress" },
            { id: "task-8-3-4", title: "New Hires Plan", status: "todo" },
            { id: "task-8-3-5", title: "CEO Signoff", status: "todo" },
          ],
        },
        {
          id: "project-8-4",
          name: "Stock Options",
          tasks: [
            { id: "task-8-4-1", title: "Legal Review", status: "todo" },
            { id: "task-8-4-2", title: "Vesting Schedule", status: "todo" },
            { id: "task-8-4-3", title: "Portal Access", status: "todo" },
            { id: "task-8-4-4", title: "Staff Memo", status: "todo" },
            { id: "task-8-4-5", title: "First Grants", status: "todo" },
          ],
        },
      ],
    },
  ],
};

export default workspaceData;