import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

await producer.connect();

await producer.send({
  topic: "test-topic",
  messages: [{ value: "Hello World!" }],
});

await producer.disconnect();
