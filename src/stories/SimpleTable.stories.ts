import type { Meta, StoryObj } from '@storybook/vue3-vite'

import 'vuetify/styles'
import '@/assets/style/fonts.css'
import '@/assets/style/variables.css'
import '@mdi/font/css/materialdesignicons.min.css'

import GsSimpleTable from '@/components/GsSimpleTable.vue'
import type { SimpleTableColumn, SimpleTableItem } from '@/helpers/interfaces'

interface AutomationTableItem extends SimpleTableItem {
  name: string
  createdOn: string
  impact: string
}

const columns: SimpleTableColumn[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'createdOn',
    label: 'Created on',
  },
  {
    id: 'impact',
    label: 'Impact',
  },
]

const items: AutomationTableItem[] = [
  {
    key: 'shopify-order-impact',
    name: 'Shopify order impact',
    createdOn: 'Apr 12, 2026',
    impact: '42 trees',
  },
  {
    key: 'monthly-plastic-recovery',
    name: 'Monthly plastic recovery',
    createdOn: 'Apr 8, 2026',
    impact: '18 kg',
  },
  {
    key: 'subscription-climate-impact',
    name: 'Subscription climate impact',
    createdOn: 'Mar 29, 2026',
    impact: '1.2 tCO2e',
  },
]

const asAutomationTableItem = (item: SimpleTableItem): AutomationTableItem =>
  item as AutomationTableItem

const meta: Meta<typeof GsSimpleTable> = {
  title: 'Components/SimpleTable',
  component: GsSimpleTable,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Columns rendered in the table header.',
    },
    items: {
      control: 'object',
      description: 'Rows rendered by the row slot.',
    },
    loading: {
      control: 'boolean',
      description: 'Shows skeleton rows while data is loading.',
    },
    minHeight: {
      control: 'text',
      description: 'Minimum table height.',
    },
    skeletonRowCount: {
      control: 'number',
      description: 'Number of skeleton rows shown while loading.',
    },
    rowsClickable: {
      control: 'boolean',
      description: 'Renders rows as buttons and emits row-click when enabled.',
    },
  },
}

export default meta

type Story = StoryObj<typeof GsSimpleTable>

const renderTable: Story['render'] = (args) => ({
  components: { GsSimpleTable },
  setup() {
    return { args, asAutomationTableItem }
  },
  template: `
    <div style="width: min(100vw - 32px, 760px);">
      <GsSimpleTable v-bind="args">
        <template #row="{ item }">
          <span class="simple-table__cell simple-table__cell--primary">
            {{ asAutomationTableItem(item).name }}
          </span>
          <span class="simple-table__cell">
            {{ asAutomationTableItem(item).createdOn }}
          </span>
          <span class="simple-table__cell simple-table__cell--metric">
            {{ asAutomationTableItem(item).impact }}
          </span>
        </template>

        <template #empty>
          <strong>No automations yet</strong>
          <span>Create an automation to see recent activity here.</span>
        </template>
      </GsSimpleTable>
    </div>
  `,
})

export const Default: Story = {
  args: {
    columns,
    items,
  },
  render: renderTable,
}

export const Loading: Story = {
  args: {
    columns,
    items: [],
    loading: true,
  },
  render: renderTable,
}

export const Empty: Story = {
  args: {
    columns,
    items: [],
  },
  render: renderTable,
}

export const NonClickableRows: Story = {
  args: {
    columns,
    items,
    rowsClickable: false,
  },
  render: renderTable,
}
