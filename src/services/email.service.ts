import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '<email>',
        pass: '<password>',
    },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: '<email>',
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
