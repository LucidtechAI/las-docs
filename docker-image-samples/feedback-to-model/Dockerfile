FROM python:3.8

WORKDIR /root

ENV TRANSITION_ID not_provided
ENV EXECUTION_ID not_provided

COPY requirements.txt .
COPY main.py .

RUN pip install -r requirements.txt

ENTRYPOINT ["python", "main.py"]
