

import { client } from "@/sanity/lib/client";
import FoodDetailsClient from "./FoodDetailsClient";

interface Food {
  _id: string;
  originalPrice: number;
  available: boolean;
  _type: string;
  description: string;
  tags: string[];
  price: number;
  name: string;
  image: {
    asset: {
      _ref: string
    }
  };
  category: string;
}

async function getFoodDetails(id: string): Promise<Food> {
  const query = `*[_type == "food" && _id == "${id}"][0]`;
  return client.fetch(query);
}

export default async function Practise({params}:{params:{id:string}}) {
  const food = await getFoodDetails(params.id);

  return <FoodDetailsClient food={food} />;
}
