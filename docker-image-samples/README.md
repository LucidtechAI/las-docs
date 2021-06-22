# Docker Image Samples
Docker images are the essence of an automatic transition.
They are the building blocks of a workflow.


## Introduction
This folder contains sample images that can be used directly in an automatic transition, 
or as a starting point for a customized step in a workflow.


## Getting started
To make a workflow that consists of the samples in this folder, 
there is no need to dwell here, just check out our 
[tutorials](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/README.md).
(TTNote: Consider if the above link should point to gitbook not github.)

## Sample images
(TTNote: Should these be images or links to images?)
* make-predictions: Get predictions from Lucidtech's world-class OCR models
* feedback-to-model: Make sure the OCR models stay state-of-the-art by feeding corrected results back to the model 
* export-to-semine: One of many standard integration modules


## Naming convention
(TTNote: If all of the documentation is for developers, suggestion to relabel this header.)
When updating an image, we use the following repository and naming convention: 
```
name=lucidtechai/transition-samples:<folder-name>
docker build . -t $name && docker push $name
```
