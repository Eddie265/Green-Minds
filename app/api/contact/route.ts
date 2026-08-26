import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        const accessKey = process.env.WEBFORM

        if (!accessKey) {
            console.error("WEBFORM environment variable is missing")

            return NextResponse.json(
                {
                    success: false,
                    message: "Email service is not configured.",
                },
                { status: 500 }
            )
        }

        const name = formData.get("name")?.toString() || ""
        const email = formData.get("email")?.toString() || ""
        const subject =
            formData.get("message_subject")?.toString() || "New Contact Form Message"
        const message = formData.get("message")?.toString() || ""

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name,
                email,
                subject,
                message,
                from_name: "Green Minds Malawi Website",
            }),
        })

        // Don't blindly call response.json()
        const responseText = await response.text()

        let result

        try {
            result = JSON.parse(responseText)
        } catch {
            console.error("Web3Forms returned non-JSON response:", responseText)

            return NextResponse.json(
                {
                    success: false,
                    message: "The email service returned an invalid response.",
                },
                { status: 502 }
            )
        }

        if (!response.ok || !result.success) {
            console.error("Web3Forms error:", result)

            return NextResponse.json(
                {
                    success: false,
                    message:
                        result.message ||
                        "Unable to send your message through the email service.",
                },
                { status: 400 }
            )
        }

        return NextResponse.json({
            success: true,
            message: "Your message has been sent successfully.",
        })
    } catch (error) {
        console.error("Contact API error:", error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while sending your message.",
            },
            { status: 500 }
        )
    }
}