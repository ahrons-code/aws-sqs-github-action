# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage
```yml
uses: ahrons-code/aws-sqs-github-action@v2

with:
  region: ${{ secrets.AWS_REGION }}
  accessKeyId: ${{ secrets.AWS_ACCESS_KEY }} 
  secretAccessKey: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  queueUrl: ${{ secrets.QUEUE_URL }}
```