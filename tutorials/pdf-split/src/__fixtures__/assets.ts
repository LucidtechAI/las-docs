import { Asset } from '@lucidtech/las-sdk-core';

const fields = {
  categories: {
    type: 'string',
    enum: [
      { value: 'INVOICE', display: 'Faktura' },
      { value: 'RECEIPT', display: 'Kvittering' },
      { value: 'MULTIPLE_RECEIPTS', display: 'Flere kvitt.' },
    ],
    display: 'Dokument type',
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
