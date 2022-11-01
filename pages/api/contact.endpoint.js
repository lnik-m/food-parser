export default (req, res) => {
  const body = JSON.parse(req.body);
  if (body.message==='contact') {
    res.status(200).json({ status: 'good contact' });
  } else {
    res.status(500).json({ status: 'bad contact' });
  }
};