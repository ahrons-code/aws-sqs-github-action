# AWS SQS GITHUB ACTION

It sends the github context when the workflow is executed.

## Example usage
```yml
uses: ahrons-code/aws-sqs-github-action@v2

with:
  region: ${{ secrets.AWS_REGION }}
  accessKeyId: ${{ secrets.AWS_ACCESS_KEY }} 
  secretAccessKey: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  queueUrl: ${{ secrets.QUEUE_URL }}
```