import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { PDFObject } from 'react-pdfobject';

import { Button, Input } from '@lucidtech/flyt-form';
import { RemoteComponentExternalProps } from './types';
import { Prediction } from '@lucidtech/las-sdk-core/lib/types';

type ConfidenceLevel = 'lowest' | 'low' | 'high' | 'highest';
type ButtonVariant = 'success' | 'soft' | 'danger' | 'primary';
declare const ___TUTORIAL_VERSION___: string;

const btnIcons = {
  success: 'fe fe-check',
  soft: 'fe fe-skip-forward',
  danger: 'fe fe-slash',
};

export const getButtonIcon = (variant?: ButtonVariant): JSX.Element | null =>
  variant && variant !== 'primary' ? <span className={btnIcons[variant]} /> : null;

const Grid = (props: { children: ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(auto, 1fr) 3fr',
      rowGap: '5px',
      columnGap: '20px',
      alignItems: 'center',
    }}
    {...props}
  />
);

const labelStyle: React.CSSProperties = {
  marginBottom: 0,
  fontWeight: 'bold',
};

const getPercentage = (confidenceValue: number): number => Math.floor(confidenceValue * 100);

const getConfidenceLevel = (confidenceLevel: number): ConfidenceLevel => {
  if (confidenceLevel >= 0.97) return 'highest';
  if (confidenceLevel >= 0.9) return 'high';
  if (confidenceLevel >= 0.6) return 'low';
  return 'lowest';
};

const formatDate = (date: Date): string => {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${year}-${month}-${day}`;
};

const RemoteComponent = ({
  transitionExecution,
  onApprove,
  onReject,
  onRequestNew,
  onSkip,
  client,
}: RemoteComponentExternalProps): JSX.Element => {
  // You'd probably prefer to use a form library like React Hook Forms, Formik, or similar.
  // For this example we'll simplify it and just make use of useState.
  const [values, setValues] = useState<Record<string, any>>({});
  const [doc, setDoc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // get the document content for our pdf viewer
  useEffect(() => {
    setIsLoading(true);
    if (!transitionExecution) return;
    if (!transitionExecution.input.documentId) return;

    client
      .getDocument(transitionExecution.input.documentId)
      .then((res) => {
        const dataUrl = `data:${res.contentType};base64,${res.content}`;
        setDoc(dataUrl);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [transitionExecution]);

  // When we get a new transitionExecution, (re)set the form values.
  // We'll also keep track of the initial predictions separately.
  const initialValues = useMemo(() => {
    const values: Record<string, any> = {};
    // map through the predictions for each field
    const initialValues: Record<string, Prediction> = Object.entries(transitionExecution.input.predictions).reduce<
      Record<string, Prediction>
    >((vals, [key, val]) => {
      console.log(key, val);
      // vals[key] = '' || val.candidates[0] || '';
      // values[key] = '' || val.candidates[0]?.value;

      return vals;
    }, {});

    setValues(values);
    return initialValues;
  }, [transitionExecution]);

  const onChange = (field: string, value: string) => {
    setValues((prevVals) => ({
      ...prevVals,
      [field]: value,
    }));
  };

  // Two helper functions that we'll use to show the confidence label and automation label,
  // but only when a value has not been manually edited.
  const isChanged = (field: string) => values[field] !== initialValues[field]?.value;

  const getConfidenceProps = (field: string) => {
    return {
      confidenceAutomated: !isChanged(field) && initialValues[field]?.confidence >= 0.99,
      confidenceLevel: isChanged(field) ? undefined : getConfidenceLevel(initialValues[field]?.confidence),
      confidenceValue: getPercentage(initialValues[field]?.confidence) || undefined,
    };
  };

  const approve = () => {
    onApprove(values);
    onRequestNew();
  }

  const reject = () => {
    onReject('Manually rejecting');
    onRequestNew();
  }

  const skip = () => {
    onSkip();
    onRequestNew();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <PDFObject url={doc} containerProps={{ style: { width: '100%', height: '95vh' } }} />
      <div style={{ minWidth: '40%' }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card">
            <div className="card-header">
              <header style={{ display: 'flex', flexDirection: 'row' }}>
                <h2 style={{ margin: 0 }}>
                  <span
                    className={`fe fe-file-text mr-3`}
                    style={{
                      backgroundColor: 'lightblue',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '0.3em',
                    }}
                  />
                  Invoice
                </h2>
              </header>
            </div>

            <div className="card-body">
              <Grid>
                <label htmlFor="invoice_number" style={labelStyle}>
                  Invoice number
                </label>
                <Input
                  name="invoice_number"
                  value={values.invoice_number}
                  onChange={(e) => onChange('invoice_number', e.target.value)}
                  {...getConfidenceProps('invoice_number')}
                />
                <label htmlFor="supplier_name" style={labelStyle}>
                  Supplier name
                </label>
                <Input
                  name="supplier_name"
                  value={values.supplier_name}
                  onChange={(e) => onChange('supplier_name', e.target.value)}
                  {...getConfidenceProps('supplier_name')}
                />
                <label htmlFor="account_number" style={labelStyle}>
                  Supplier number
                </label>
                <Input
                  name="account_number"
                  value={values.account_number}
                  onChange={(e) => onChange('account_number', e.target.value)}
                  {...getConfidenceProps('account_number')}
                />
                {/* <label htmlFor="invoice_date" style={labelStyle}>
                Invoice date
              </label>
              <div>
                <DateInput
                  selected={new Date(values.invoice_date)}
                  onSelect={(date) => onChange('invoice_date', formatDate(date))}
                  onChange={(date) => onChange('invoice_date', formatDate(date as Date))}
                  {...getConfidenceProps('invoice_date')}
                />
              </div> */}
                {/* <label htmlFor="due_date" style={labelStyle}>
                Due date
              </label>
              <div>
                <DateInput
                  selected={new Date(values.due_date)}
                  onSelect={(date) => onChange('due_date', formatDate(date))}
                  onChange={(date) => onChange('due_date', formatDate(date as Date))}
                  {...getConfidenceProps('due_date')}
                />
              </div> */}
                <label htmlFor="total_amount" style={labelStyle}>
                  Total amount
                </label>
                <Input
                  name="total_amount"
                  value={values.total_amount}
                  onChange={(e) => onChange('total_amount', e.target.value)}
                  {...getConfidenceProps('total_amount')}
                />
              </Grid>
            </div>

            <div className="card-footer">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ order: 2 }}>
                  <Button variant="success" style={{ width: '150px', order: 1 }} onClick={approve}>
                    {getButtonIcon('success')}
                  </Button>
                </div>
                <div style={{ order: 1, display: 'flex', flexDirection: 'row' }}>
                  <Button variant="soft" style={{ order: 2 }} onClick={skip}>
                    {getButtonIcon('soft')}
                  </Button>
                  <Button variant="danger" className="mr-2" style={{ order: 1 }} onClick={reject}>
                    {getButtonIcon('danger')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="text-muted small text-right">Version: {___TUTORIAL_VERSION___}</p>
      </div>
    </div>
  );
};

export default RemoteComponent;
