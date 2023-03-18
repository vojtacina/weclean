// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const data = req.body

  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to: process.env.SENDGRID_MAIL_TO, // Change to your recipient
    from: 'jsem@vojtechcina.cz', // Change to your verified sender
    template_id: "d-215349e3e95249b493cef925bc8c89e8",
    dynamic_template_data: data
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email to Viktor Cina sent')
    })
    .catch((error:any) => {
      console.error(error)
    })

  if(data?.contact.includes("@")) {
    const msg = {
      to: process.env.SENDGRID_MAIL_TO, // Change to your recipient
      from: 'jsem@vojtechcina.cz', // Change to your verified sender
      template_id: "d-2bcbd2fc0702416d85141f9fe9c888a6",
      dynamic_template_data: data
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email to customer sent')
      })
      .catch((error:any) => {
        console.error(error)
      })
  }

  res.status(200).json({ status: 'Email sent' })
}
