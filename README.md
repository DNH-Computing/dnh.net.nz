# [dnh.net.nz](http://dnh.net.nz)

[Wintersmith](http://wintersmith.io) site for [dnh.net.nz](http://dnh.net.nz)

## Setup

Run `npm install` to install dependencies.

## Making Changes

Run `./wintersmith preview` to start a development server on http://localhost:8080. Make changes to pages under `contents/` or to the template at `templates/template.html`

## Deploying

This site is going to be served up by S3 behind CloudFront, and kept updated via a github hook that triggers AWS Lambda to build the site and deploy it to S3. TODO implement this.