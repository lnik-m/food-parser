export default function handler(req, res) {
  res.status(200).json({
    groceries: ['milk', 'carrot', 'apples', 'watermelon']
  })
}
