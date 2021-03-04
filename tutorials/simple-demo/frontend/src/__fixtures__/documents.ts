import { LasDocument } from '@lucidtech/las-sdk-core/lib/types';
import bigjpg from './documents/2500x3700jpg'

const documents: Record<string, LasDocument> = {
  'las:document:abc': {
    documentId: 'las:document:abc',
    contentType: 'application/pdf',
    content: 'JVBERi0xLjAKMSAwIG9iajw8L1BhZ2VzIDIgMCBSPj5lbmRvYmogMiAwIG9iajw8L0tpZHNbMyAwIFJdL0NvdW50IDE+PmVuZG9iaiAzIDAgb2JqPDwvTWVkaWFCb3hbMCAwIDMgM10+PmVuZG9iagp0cmFpbGVyPDwvUm9vdCAxIDAgUj4+Cg==',
  },
  'las:document:bigjpg': {
    documentId: 'las:document:bigjpg',
    contentType: 'image/jpeg',
    content: bigjpg,
  },
};

export default documents;
