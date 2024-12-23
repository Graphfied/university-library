import { Client as WorkflowClient } from "@upstash/workflow";

import config from "./config";

const client = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken!,
});

export default client;
