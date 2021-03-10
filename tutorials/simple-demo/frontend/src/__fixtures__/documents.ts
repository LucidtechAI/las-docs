import { LasDocument } from '@lucidtech/las-sdk-core/lib/types';
import bigjpg from './documents/2500x3700jpg';
import multiPageTiff from './documents/multi_page_tiff';
import multiPagePDF from './documents/multi_page_pdf';

const documents: Record<string, LasDocument> = {
  'las:document:bigjpg': {
    documentId: 'las:document:bigjpg',
    contentType: 'image/jpeg',
    content: bigjpg,
  },
  'las:document:multipagetiff': {
    documentId: 'las:document:multipagetiff',
    contentType: 'image/tiff',
    content: multiPageTiff,
  },
  'las:document:multipagepdf': {
    documentId: 'las:document:multipagepdf',
    contentType: 'application/pdf',
    content: multiPagePDF,
  },
};

export default documents;
