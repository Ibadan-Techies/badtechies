import mongoose from 'mongoose'

const VisitorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    what_you_bring_to_table: {
      type: String,
      required: true,
    },
    who_told_you: {
      type: String,
    },
  },
  { timestamps: true }
)

export const Visitor =
  mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema)
