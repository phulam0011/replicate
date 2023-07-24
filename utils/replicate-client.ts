import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  async function myFunction() {
    const output = await replicate.run(
      "phucctd0111/capu-vietnamese:eb4d8a28a70f76101cc296153ba417ff014fc28ae4a48328e97f12e893038993",
      {
        input: {
          input_text: "xin chào các bạn"
        }
      }
    );
    console.log(output);
    }
    myFunction();

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? '', //this is in the dashboard
      apiKey: process.env.PINECONE_API_KEY ?? '',
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

export const pinecone = await initPinecone();
