import { brands } from "@/public/dummy_data";

export default function handler(req, res) {
  res.status(200).json({
    message: "Success",
    data: {
      brands,
    },
  });
}
