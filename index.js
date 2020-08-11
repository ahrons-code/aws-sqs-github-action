const core = require('@actions/core');
const github = require('@actions/github');
var AWS = require('aws-sdk');

try {
    const region = core.getInput('region');
    const accessKeyId = core.getInput('accessKeyId');
    const secretAccessKey = core.getInput('secretAccessKey');
    const queueUrl = core.getInput('queueUrl');

    const payload = "Build from ${github.actor} repo ${github.repository}"
    console.log(`The event payload: ${payload}`);
    sendSqsMessage(payload, region, accessKeyId, secretAccessKey, queueUrl)
} catch (error) {
    core.setFailed(error.message);
}

function sendSqsMessage(body, region, accessKey, secretKey, queueUrl) {
    AWS.config.update({region: region, accessKeyId: accessKey, secretAccessKey: secretKey});

    var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

    var params = {
        MessageBody: body,
        QueueUrl: queueUrl
    };

    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });
}