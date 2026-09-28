import { ManagementProject } from '@/types';

export const managementProjects: ManagementProject[] = [
  {
    id: 'industry-partnerships-platform',
    title: 'Project-Based Learning Platform Modernization',
    category: 'Program Management & Operations',
    shortDescription: 'Directed the operational rollout and systems architecture for an enterprise-level student capstone and project portfolio engine.',
    fullDescription: 'Championed cross-functional program execution between collegiate engineering teams and industrial enterprise clients. Established Earned Value Management (EVM) reporting baselines, transparent sprint rituals, and standardized client milestones that increased deliverables completion rates.',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tags: ['EVM', 'Agile & Scrum', 'Cross-Functional Ops', 'Power BI', 'Stakeholder Mgmt'],
    challenge: 'Cross-functional student teams and industrial sponsors suffered from disjointed tracking tools, inconsistent milestone delivery schedules, and subjective evaluation rubrics.',
    methodology: 'Constructed an integrated Power Query and DAX metric dashboard tracking schedule variance (SV) and cost performance indices (CPI). Conducted weekly standups and structured stage-gate governance reviews.',
    results: 'Streamlined portfolio tracking across 12+ concurrent engineering initiatives, raising on-time client deliverable rates to 94% and cutting status reporting overhead by 60%.',
    metrics: [
      { label: 'On-Time Milestones', value: '94%' },
      { label: 'Active Projects Managed', value: '12+' },
      { label: 'Reporting Overhead Reduction', value: '60%' }
    ],
    deliverables: [
      'Executive KPI & Earned Value Management Dashboard',
      'Standardized SOW and Stage-Gate Rubrics',
      'Client Escalation and Risk Mitigation Playbook'
    ]
  },
  {
    id: 'fintech-operations-optimization',
    title: 'Fintech Operations & Product Lifecycle Optimization',
    category: 'Product & Operations',
    shortDescription: 'Refactored customer approval pipelines and underwriting workflow states to slash processing cycle times.',
    fullDescription: 'Identified conversion bottlenecks in high-volume underwriting queues. Partnered with engineering and credit risk managers to automate manual review gates and streamline backend customer onboarding.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Product Management', 'Process Optimization', 'DAX / SQL', 'Fintech'],
    challenge: 'High drop-off during manual verification states resulted in prolonged approval turnaround times and increased customer acquisition costs.',
    methodology: 'Mapped 14 individual pipeline states, isolated operational latency contributors, and prototyped automated rules engines for Tier-1 credit tiers.',
    results: 'Reduced average approval queue time from 18 hours to under 45 minutes for standard risk profiles.',
    metrics: [
      { label: 'Queue Time Drop', value: '-85%' },
      { label: 'Throughput Lift', value: '+35%' }
    ],
    deliverables: [
      'Comprehensive Value-Stream Map',
      'Automated Risk Triage Architecture',
      'Internal Operations Standard Operating Procedures (SOP)'
    ]
  }
];