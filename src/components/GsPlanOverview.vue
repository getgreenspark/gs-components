<template>
  <article class="gs-plan-overview">
    <header class="gs-plan-overview__header">
      <GsTypography bold tag="h1" variant="title-2">Your plan</GsTypography>
    </header>

    <div class="gs-plan-overview__content">
      <GsManagePlanSelector
        :image-url="imageUrl"
        :image-alt="imageAlt"
        :title="title"
        :description="description"
        :button-text="buttonText"
        :show-tag="showTag"
        :tag-text="tagText"
        @action="onManagePlanClick"
      />

      <section class="gs-plan-overview__features">
        <GsTypography bold tag="h2" variant="title-2">Included in your plan</GsTypography>
        <ul class="gs-plan-overview__features-list">
          <li v-for="(feature, index) in features" :key="index">
            <GsIconWithText
              :text="feature"
              iconColor="var(--ui-green)"
              mdiIcon="mdi-check"
              tag="p"
              textVariant="body"
            />
          </li>
        </ul>
      </section>

      <section class="gs-plan-overview__billing">
        <GsTypography bold tag="h2" variant="title-2">Billing and payment</GsTypography>

        <div class="gs-plan-overview__payment-info">
          <GsIconWithText
            iconAlt="Stripe"
            iconPath="/icons/stripe-card.svg"
            text="Paid via Stripe"
            textVariant="description"
          />

          <div class="gs-plan-overview__price-details">
            <GsIconWithText
              :text="priceText"
              iconPath="/icons/money.svg"
              textVariant="description"
            />
            <div class="gs-plan-overview__billing-cycle">
              <GsIconWithText
                iconPath="/icons/calendar.svg"
                text="Current billing cycle:"
                textVariant="description"
              />
              <GsTypography class="gs-plan-overview__bold" variant="description">
                {{ billingCycle }}
              </GsTypography>
              <GsTypography variant="description">
                {{ billingType }}
              </GsTypography>
            </div>
            <GsButton full-width type="secondary" @click="onUpdatePaymentClick">
              Update Payment
            </GsButton>
          </div>
        </div>
      </section>
    </div>

    <GsAlertBar v-if="showTrialNotice" :message="trialMessage" full-width type="warning" />
  </article>
</template>

<script lang="ts" setup>
import GsManagePlanSelector from './GsManagePlanSelector.vue'
import GsTypography from './GsTypography.vue'
import GsIconWithText from './GsIconWithText.vue'
import GsAlertBar from './GsAlertBar.vue'
import GsButton from './GsButton.vue'

defineOptions({
  name: 'GsPlanOverview',
})

interface Props {
  imageUrl?: string
  title?: string
  /**
   * The description text to display below the title.
   * Supports HTML content which will be safely rendered.
   * @example "For companies just getting started on their <strong>positive impact</strong> journey."
   */
  description?: string
  tagText?: string
  showTag?: boolean
  /**
   * List of features included in the plan.
   * Each feature supports HTML content which will be safely rendered.
   * @example ["Create and manage your impact with <a href='#'>vetted climate projects</a>"]
   */
  features?: string[]
  priceText?: string
  billingCycle?: string
  billingType?: string
  showTrialNotice?: boolean
  trialMessage?: string
  onUpdatePaymentClick?: () => void
  onManagePlanClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  imageUrl: '/placeholder-image.png',
  title: 'Starter Plan - Monthly',
  description: 'For companies just getting started on their positive impact journey.',
  tagText: 'Free trial',
  showTag: true,
  features: () => [
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
  trialMessage:
    "You're on a free trial of the <Plan_Name>. If you change your plan type during your trial it will end and you'll be charged.",
  onUpdatePaymentClick: () => {},
  onManagePlanClick: () => {},
})
</script>

<style scoped>
.gs-plan-overview {
  border-radius: 8px;
  background-color: var(--ui-white);
  padding: 32px;
}

.gs-plan-overview__content {
  display: flex;
  margin-top: 16px;
  width: 100%;
  align-items: start;
  gap: 40px;
  justify-content: start;
  flex-wrap: wrap;
}

.gs-plan-overview__features {
  align-self: stretch;
  min-width: 240px;
  flex-grow: 1;
  flex-shrink: 1;
  width: 300px;
}

.gs-plan-overview__features-list {
  margin-top: 16px;
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: -10px;
}

.gs-plan-overview__billing {
  flex-grow: 1;
  flex-shrink: 1;
  width: 182px;
  max-width: 227px;
}

.gs-plan-overview__payment-info {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.gs-plan-overview__price-details {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.gs-plan-overview__price-details :deep(.gs-button) {
  margin-top: 32px;
}

.gs-plan-overview__billing-cycle {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.gs-plan-overview__bold {
  font-weight: 700;
}

@media (max-width: 991px) {
  .gs-plan-overview {
    padding: 20px;
  }
}

@media (max-width: 640px) {
  .gs-plan-overview__content {
    gap: 24px;
  }
}

.gs-plan-overview :deep(.gs-alert-bar) {
  margin-top: 40px;
}

:deep(a) {
  color: inherit;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
}
</style>
