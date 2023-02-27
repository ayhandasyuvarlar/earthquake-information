// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Anasayfa",
      url: "/",
    },
    {
      name: "Hakkımda",
      url: "/about",
    },
    {
      name: "İletişim",
      url: "/contact",
    },
  ]);
}
