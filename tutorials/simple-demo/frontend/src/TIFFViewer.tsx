import React, { useMemo } from 'react';
import UTIF from 'utif';

type TIFFViewerProps = {
  doc: string;
};
const TIFFViewer = ({ doc }: TIFFViewerProps): JSX.Element => {
  const docBinary = useMemo(() => {
    const binData = Uint8Array.from(atob(doc || ''), (c) => c.charCodeAt(0));
    const decodedDocPages: Array<Uint8Array> = [];
    try {
      const data = UTIF.decode(binData);
      for (const page of data) {
        UTIF.decodeImage(binData, page);
        const decodedImage = UTIF.toRGBA8(page);
        decodedDocPages.push(decodedImage);
      }
    } catch (e) {
      console.error(e);
    } finally {
      return decodedDocPages;
    }
  }, [doc]);

  console.log(docBinary);
  return <div>Test</div>;
};

export default TIFFViewer;
