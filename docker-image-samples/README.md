# Docker Image Samples
Docker images are the essence of an automatic transition;
they are the building blocks of a workflow.


## Introduction
This folder contains sample images that can be used directly in an automatic transition, 
or as a starting point for a customized step in a workflow.


## Getting started
To make a workflow that consist of the samples in this folder 
there is no need to dwell here. Just check out the 
[tutorials](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/README.md)

## Sample images
* make-predictions: Get predictions from Lucidtechs world class OCR-models
* feedback-to-model: Make sure the OCR-models stays state-of-the-art by feeding corrected results back to the model 
* export-to-semine: One of many standard integration modules. 

## For developers
When updating an image we use the following repo and naming convention: 
```
name=lucidtechai/transition-samples:<folder-name>
docker build . -t $name && docker push $name
```