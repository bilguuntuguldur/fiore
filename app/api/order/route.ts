import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, phone, recieverName,  recieverPhone,  recieverAddress, message, flowerCode, flowerPrice } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: `Message from ${name} (${email})`,
        html: `
        <head>
            <title>Захиалгын мэдээлэл</title>
        </head>
        <div className="header-section"> 
            <h4>Захиалгын мэдээлэл</h4>
        </div>
        </br>
        </br>
        <ul style="list-style-type: none;">
            <li style="margin-bottom: 3px;">Захиалагчын нэр: ${name}</li>
            <li style="margin-bottom: 3px;">Захиалагчын утасны дугаар: ${phone}</li>
            <li style="margin-bottom: 3px;">Хүлээн авагчийн нэр: ${recieverName}</li>
            <li style="margin-bottom: 3px;">Хүлээн авагчийн утасны дугаар: ${recieverPhone}</li> 
            <li style="margin-bottom: 3px;">Хүлээн авагчийн хаяг: ${recieverAddress}</li> 
            <li style="margin-bottom: 3px;">Мэндчилгээний үг: ${message}</li>
        </ul>
        </br>
        </br>
        <div className="header-section"> 
            <h4>Цэцэгний мэдээлэл</h4>
        </div>
        <ul style="list-style-type: none;">
        <li>Цэцэгний код: ${flowerCode}</li>
        <li>Цэцэгний үнэ: ${flowerPrice}</li>
        </ul>
        `
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
            resolve('Амжилттай илгээлээ, бид тантай удахгүй холбогдох болно.');
            } else {
            reject(err.message);
            }
        });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}