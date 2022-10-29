// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const number = 5
  console.log(number)
  res.status(200).json({ name: 'Hello' })
}
