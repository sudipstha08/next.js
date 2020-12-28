import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const KEY = 'kmkfdskfnsnfkldmsfkdsmfkld'

export default function (req: NextApiRequest, res: NextApiResponse) {
  // res.setHeader("X-custom-header", "app/json")
  // res.setHeader("Set-Cookie", "isLogged=true")
  // res.json({ num: Math.floor(Math.random() * 10) })

  if (!req.body) {
    res.statusCode = 404
    res.end('error')
    return
  }

  const { username, password } = req.body

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin',
      },
      KEY,
    ),
  })
}
