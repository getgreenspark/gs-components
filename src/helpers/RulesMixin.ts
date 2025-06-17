import { defineComponent } from 'vue'
import {
  arrayMinLength,
  domain,
  email,
  emailName,
  maxlength,
  maxTwoDecimal,
  maxValue,
  minlength,
  minValue,
  password,
  positiveInteger,
  required,
  type Rule,
  unique,
  url,
} from '@/helpers/validation'

export const RulesMixin = defineComponent({
  data() {
    return {
      rules: {
        arrayMinLength,
        domain,
        email,
        emailName,
        maxlength,
        maxTwoDecimal,
        maxValue,
        minlength,
        minValue,
        password,
        positiveInteger,
        required,
        unique,
        url,
      } satisfies Record<string, Rule>,
    }
  },
})
