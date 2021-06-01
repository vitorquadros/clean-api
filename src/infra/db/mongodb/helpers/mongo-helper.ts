import { MongoClient } from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient, // need to be done this way bc of object/ts syntax conflict

  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },

  async disconnect(): Promise<void> {
    await this.client.close();
  },
};
