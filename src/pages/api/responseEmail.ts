import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { response } = req.body

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['zemus241@gmail.com'],
      subject: 'Val response',
      text: `Your babe says ${response} to your val request`,
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
