import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

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
