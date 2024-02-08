import connectDB from '@/utilities/connect_db'
import { Visitor } from '@/models/Visitor.model'

export default async function POST(req, res) {
  try {
    await connectDB()
    let person = await req.body
    person = JSON.parse(person)
    const visitor = await Visitor.create({ ...person })
    return res.status(200).json(visitor)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err.message })
  }
}
