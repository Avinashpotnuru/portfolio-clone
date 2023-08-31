import { NextApiRequest, NextApiResponse } from "next";

import { Details } from "@/src/model/model";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://avinash:LE9e9K7eKwrmFGyA@cluster0.istpydn.mongodb.net/clientdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

export default function (req, res) {
  if (req.method === "POST") {
    const postData = async () => {
      const { firstName, email, number, message } = req.body;
      try {
        const client = new Details({ firstName, email, number, message });
        await client.save();
        res.json(await Details.find());
      } catch (err) {
        //console.log(err);
      }
    };
    postData();
  }
  // res.status(200).json({ name: "avinash" });
}
