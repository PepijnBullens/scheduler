import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

    const postData = await request.json();
    const { token } = postData;

    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);

    try {
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString(),
        }).then((response) => response.json());

        if (res.success) {
            return NextResponse.json({ success: true, score: res.score });
        } else {
            return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" });
        }
    } catch (e) {
        return NextResponse.json({ success: false, message: "Failed to verify reCAPTCHA" });
    }
}
