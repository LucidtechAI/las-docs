import { Asset } from '@lucidtech/las-sdk-core';

const fields = {
  document_type: {
    type: 'string',
    enum: [{ value: 'INVOICE', display: 'Faktura' }, { value: 'REMINDER', display: 'Purring' }, 'CREDITNOTE'],
    display: 'Dokument type',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
  bank_account: {
    type: 'string',
    display: 'Bank account',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
  due_date: {
    type: 'date',
    display: 'Due date',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
  invoice_date: {
    type: 'date',
    display: 'Invoice date',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
  total: {
    type: 'amount',
    display: 'Total amount',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
  buyer: {
    type: 'buyer',
    display: 'Kjøper',
    confidenceLevels: { automated: 0.98, highest: 0.97, high: 0.9, low: 0.5 },
  },
};

function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(_match, p1) {
      return String.fromCharCode(Number('0x' + p1));
    }),
  );
}

const fieldsB64 = b64EncodeUnicode(JSON.stringify(fields));

const assets: Record<string, Asset> = {
  'las:asset:fieldConfig': {
    assetId: 'las:asset:fieldConfig',
    content: fieldsB64,
  },
};

export default assets;
