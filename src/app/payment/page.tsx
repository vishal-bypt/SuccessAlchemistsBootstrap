'use client';
import { useState } from "react";

export default function Payment() {
    const [order_id] = useState(`ORD${Date.now()}`);
    const [amount, setAmount] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    const handlePayment = async (e:any) => {
        e.preventDefault();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Replace with your API
        const response = await fetch(apiUrl+"/initiate-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ order_id, amount, customer_name: customerName, customer_email: customerEmail, customer_phone: customerPhone }),
        });

        const data = await response.json();
        if (data.encryptedData) {
            const form = document.createElement("form");
            form.method = "POST";
            form.action = data.ccavenue_url;

            const accessCode = document.createElement("input");
            accessCode.type = "hidden";
            accessCode.name = "access_code";
            accessCode.value = data.access_code;
            form.appendChild(accessCode);

            const encRequest = document.createElement("input");
            encRequest.type = "hidden";
            encRequest.name = "encRequest";
            encRequest.value = data.encryptedData;
            form.appendChild(encRequest);

            document.body.appendChild(form);
            form.submit();
        }
    };

    return (
        <div>
            <h2>CCAvenue Payment</h2>
            <form onSubmit={handlePayment}>
                <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                <input type="text" placeholder="Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                <input type="email" placeholder="Email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                <input type="tel" placeholder="Phone" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}
