import { Asset } from '@lucidtech/las-sdk-core/lib/types';

const fields = {
  bank_account: { type: 'string', display: 'Bank account', confidenceLevels: { "automated": 0.98, "highest": 0.97, "high": 0.9, "low": 0.5 } },
  due_date: { type: 'date', display: 'Due date', confidenceLevels: { "automated": 0.98, "highest": 0.97, "high": 0.9, "low": 0.5 } },
  invoice_date: { type: 'date', display: 'Invoice date', confidenceLevels: { "automated": 0.98, "highest": 0.97, "high": 0.9, "low": 0.5 } },
  total: { type: 'amount', display: 'Total amount', confidenceLevels: { "automated": 0.98, "highest": 0.97, "high": 0.9, "low": 0.5 } },
}

const fieldsB64 = btoa(JSON.stringify(fields))

const assets: Record<string, Asset> = {
  'las:asset:fields': {
    assetId: 'las:asset:fields',
    content: fieldsB64,
  },
};

export default assets;
