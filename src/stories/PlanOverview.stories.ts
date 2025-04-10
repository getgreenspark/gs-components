import type { Meta, StoryObj } from '@storybook/vue3'
import GsPlanOverview from '../components/GsPlanOverview.vue'
import '@/assets/style/variables.css'

const meta: Meta<typeof GsPlanOverview> = {
  title: 'Sections/PlanOverview',
  component: GsPlanOverview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Plan Overview Component

A comprehensive view of a user's plan details, including:
- Current plan information
- Included features
- Billing and payment details
- Trial status notification

### Usage

\`\`\`vue
<template>
  <gs-plan-overview
    title="Your Plan Name"
    description="Plan description"
    :features="['Feature 1', 'Feature 2']"
    priceText="£10/month"
    @update-payment-click="handleUpdatePayment"
    @manage-plan-click="handleManagePlan"
  />
</template>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'URL for the plan illustration image',
    },
    title: {
      control: 'text',
      description: 'Plan title',
    },
    description: {
      control: 'text',
      description: 'Plan description',
    },
    tagText: {
      control: 'text',
      description: 'Text for the plan tag (e.g. "Free trial")',
    },
    showTag: {
      control: 'boolean',
      description: 'Whether to show the plan tag',
    },
    features: {
      control: undefined,
      description: 'Array of feature descriptions',
    },
    priceText: {
      control: 'text',
      description: 'Price display text',
    },
    billingCycle: {
      control: 'text',
      description: 'Current billing cycle dates',
    },
    billingType: {
      control: 'text',
      description: 'Type of billing (e.g. "Monthly plan, paid monthly")',
    },
    showTrialNotice: {
      control: 'boolean',
      description: 'Whether to show the trial notice',
    },
    trialMessage: {
      control: 'text',
      description: 'Custom message for the trial notice',
    },
    onUpdatePaymentClick: {
      action: 'update-payment-click',
      description: 'Event emitted when the Update Payment button is clicked',
    },
    onManagePlanClick: {
      action: 'manage-plan-click',
      description: 'Event emitted when the Manage Plan button is clicked',
    },
  },
}

export default meta

export const Default: StoryObj<typeof meta> = {
  args: {
    imageUrl: '/placeholder-image.png',
    title: 'Starter Plan - Monthly',
    description: 'For companies just getting started on their positive impact journey.',
    tagText: 'Free trial',
    showTag: true,
    features: [
      'Create and manage your impact with vetted climate projects',
      '1 active user',
      '1 active app integration with basic automations',
      'Public profile, dynamic widgets and badges to showcase & share your impact',
      "Offset your team's carbon and plastic footprints",
      'Basic analytics to track your impact',
      'One additional tree planted free every month',
    ],
    priceText: '£5/month',
    billingCycle: 'Oct 4, 2024 - Nov 3, 2024',
    billingType: 'Monthly plan, paid monthly',
    showTrialNotice: true,
    onUpdatePaymentClick: () => console.log('Update Payment clicked'),
    onManagePlanClick: () => console.log('Manage Plan clicked'),
  },
}

export const PremiumPlan: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    title: 'Premium Plan - Annual',
    description: 'For growing companies ready to maximize their impact.',
    tagText: 'Most popular',
    features: [
      'All Starter Plan features',
      'Up to 5 active users',
      'Advanced analytics and reporting',
      'Priority support',
      'Custom impact dashboard',
    ],
    priceText: '£50/month',
    billingCycle: 'Jan 1, 2024 - Dec 31, 2024',
    billingType: 'Annual plan, paid yearly',
    showTrialNotice: false,
  },
}

export const WithoutTrialNotice: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    showTrialNotice: false,
  },
}

export const CustomTrialMessage: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    trialMessage:
      'Your free trial of the Premium Plan ends in 5 days. Upgrade now to keep your benefits!',
  },
}

export const WithoutTag: StoryObj<typeof meta> = {
  args: {
    ...Default.args,
    showTag: false,
  },
}
