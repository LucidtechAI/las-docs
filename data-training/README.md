# Getting Started with Custom Training
![Data Training](https://lucidtech.ai/assets/img/illustrations/data-training.png)

Lucidtech offers APIs for document data extracting. The core technology is a general machine learning architecture which can be used to interpret a wide range of document types, including invoices, receipts, ID-documents, purchase orders or virtually any other type of document.

To make sure that our API provides optimal accuracy we train our models on your data. We use supervised learning for training our machine learning models. This means that the algorithms learn by observing thousands of examples of documents together with their ground truth. The goal of the training process is that Lucidtech's models learn to produce the correct output for new and previously unseen documents.

## 1. Data requirements

### Volume
The amount of data needed to create a high quality API depends on the complexity of the API and your requirements. As a general rule of thumb we recommend you to provide at least 5000 documents as a start. When the API is running in production, the model will benefit from continuous learning from all new data.

### Representative data
The training data should be representative for the expected data. This means that the training data should be similar to the expected data for in terms of similarity and variation. For example, if the expected data consists of invoices from thousands of different vendors, then the training data should not only consist of invoices from five different vendors.

### Correctness of data
Incorrect or missing ground truth information can be detrimental to the training process. For this reason it is important that the training data is as accurate as possible.

### Consistency
Ground truth data should adhere to a common format. For example, when extracting dates, all ground truth dates should be listed on the same format to prevent some dates from being written 17.05.18, while others are written 17th of May, 2018.

## 2. Data preparation

### Deciding what to extract
The first step is to decide which data fields you want to extract from your documents. For an invoice this can be total amount, due date and bank account, or it can also be only total amount. For an ID document it can be first name, last name, id-number and nationality. For a travel ticket it can be price, departure date, arrival date, seat number and mean of transportation. Which data fields you want to extract is up to you as a customer to decide, our general recommendation is to keep it as simple as possible. Do not add fields that you will not use, and make sure that the majority of the data you provide contain the fields you specify.

### Every document needs a ground truth
To start training your custom model you need pairs of documents and their corresponding ground truth. The ground truth is the information you want to extract from the document. Note that every single document needs its own ground truth file.

![Ground Truth](https://lucidtech.ai/assets/img/illustrations/illustration-10.png)

### Providing ground truth data
```json
{
  "document":{
    "path": "<path/to/document.jpg>",
    "type": "receipt"
  },
  "labels":{
    "<your_first_field_name>":  "<ground_truth_value_for_this_documents_first_field>",
    "<your_second_field_name>":  "<ground_truth_value_for_this_documents_second_field>",
    "<your_third_field_name>":  "<ground_truth_value_for_this_documents_third_field>"
  }
}
```

![Example 1](https://lucidtech.ai/assets/img/photos/lucidcab.jpg)
![Example 2](https://lucidtech.ai/assets/img/photos/receipt-ocr-example2.jpg)
![Bill of Lading](https://lucidtech.ai/assets/img/photos/receipt-ocr-example2.jpg)
Foo bar

### Directory structure
Something here.
