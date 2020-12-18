FROM python:3.8

WORKDIR /root

ENV TRANSITION_ID not_provided
ENV EXECUTION_ID not_provided

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY src/ .

COPY credentials.cfg .
COPY config.cfg .

ARG CONFIG_SECTION
ENV CONFIG_SECTION $CONFIG_SECTION
ARG CREDENTIALS_SECTION
ENV CREDENTIALS_SECTION $CREDENTIALS_SECTION

# input to this function will be provided through the command line arguments
ENTRYPOINT ["python", "main.py"]
