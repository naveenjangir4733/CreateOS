import {
  AudioWaveform,
  Bot,
  Command,
  Frame,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

export const createOSData = {
  user: {
    name: 'Naveen Jangir',
    email: 'naveenjangir4733@gmail.com',
    avatar: '/avatars/naveen.jpg',
  },
  teams: [
    {
      name: 'Personal',
      logo: AudioWaveform,
      plan: 'Free',
    },
    {
      name: 'Business',
      logo: Bot,
      plan: 'Pro',
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: PieChart,
      isActive: true,
      items: [
        { title: 'Overview', url: '/dashboard/overview' },
        { title: 'Stats', url: '/dashboard/stats' },
        { title: 'Reports', url: '/dashboard/reports' },
      ],
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: Frame,
      items: [
        { title: 'All Projects', url: '/projects/all' },
        { title: 'Create New', url: '/projects/new' },
      ],
    },
    {
      title: 'AI Assistant',
      url: '/ai',
      icon: Bot,
      items: [
        { title: 'Generate Content', url: '/ai/generate' },
        { title: 'Analyze Data', url: '/ai/analyze' },
        { title: 'Automation Tasks', url: '/ai/automate' },
      ],
    },
    {
      title: 'Scheduling',
      url: '/scheduling',
      icon: Command,
      items: [
        { title: 'Calendar', url: '/scheduling/calendar' },
        { title: 'Automated Reminders', url: '/scheduling/reminders' },
      ],
    },
    {
      title: 'Payments',
      url: '/payments',
      icon: SquareTerminal,
      items: [
        { title: 'Transactions', url: '/payments/transactions' },
        { title: 'Integrations', url: '/payments/integrations' },
      ],
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings2,
      items: [
        { title: 'Account', url: '/settings/account' },
        { title: 'Team', url: '/settings/team' },
        { title: 'Billing', url: '/settings/billing' },
        { title: 'Limits', url: '/settings/limits' },
      ],
    },
  ],
  projects: [
    {
      name: 'CreateOS v1',
      url: '/projects/createos-v1',
      icon: Frame,
    },
    {
      name: 'Marketing Automation',
      url: '/projects/marketing',
      icon: PieChart,
    },
    {
      name: 'AI Research',
      url: '/projects/ai-research',
      icon: Bot,
    },
  ],
};
