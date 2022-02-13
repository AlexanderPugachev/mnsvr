import {IconName} from "components/Icon";


const accountNameValues = [
  'cash',
  'credit card',
] as const;

type AccountName = typeof accountNameValues[number]

export interface Account {
  name: AccountName;
  icon: IconName;
}

