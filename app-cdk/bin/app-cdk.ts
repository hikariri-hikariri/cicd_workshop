import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack'
import { EcrCdkStack } from '../lib/ecr-cdk-stack';

const app = new cdk.App();

const testCdkStack = new AppCdkStack(app, 'test', {});

const ecrCdkStack = new EcrCdkStack(app, 'ecr-stack', {});

const pipelineCdkStack = new PipelineCdkStack(app, 'pipeline-stack', {
  ecrRepository: ecrCdkStack.repository,
});
// no mean comment
