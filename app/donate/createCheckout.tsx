"use server";
import {Stripe} from "stripe";

export default async function createCheckout(amount: number) {
    const API_KEY = process.env.STRIPE_SECRET_KEY!;
    const PROD = process.env.ENV === "production";
    const stripe = new Stripe(API_KEY)
    let host = "http://localhost:3000";
    if (PROD) {
        host = "https://harukadev.xyz";
    }

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'mxn',
                    product_data: {
                        name: 'Donation',
                    },
                    unit_amount: amount * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${host}/donate?success=true`,
        cancel_url: `${host}`,
    });
    return session.url;


}