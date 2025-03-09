import { Stack, StackProps } from "aws-cdk-lib";
import * as ecr from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";

export class EcrCdkStack extends Stack {
  public readonly repository: ecr.Repository;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    this.repository = new ecr.Repository(this, "my_app");
  }
}
