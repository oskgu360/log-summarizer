### Papertrail Webhook Log summarizer

logSummarizer is a node express server accepting the webhook http request from Papertrail. Summarizing and counting the occurances of same messages log events. Grouping them and emailing them to a configured email account located in mailService.js.

Run with "node logSummarizer.js"

### Create dummy data to Papertrail

./paperTrailLogger/server.js includes a dummy server that logs its accesslog to the papertrail service.
Run with "node paperTrailLogger/server.js"
