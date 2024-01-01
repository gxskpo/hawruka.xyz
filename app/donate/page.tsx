"use client";
import {useState, useEffect} from "react";
import styles from "./Donate.module.css";
import {showModal} from "@/app/components/genericModal";
import createCheckout from "./createCheckout";
import {useRouter} from "next/navigation";
import {useSearchParams} from "next/navigation";


export default function DonatePage() {
    const [amount, setAmount] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.has("success")) {
            showModal("Success", "Thank you for your donation!", "fas fa-check");
        }
    }, [searchParams]);
    const donate = async () => {
        if (amount < 10) {
            return showModal("Error", "You can't donate less than 10$", "fas fa-times");
        } else if (amount > 3000) {
            return showModal("Error", "You can't donate more than 3000$", "fas fa-times");
        }
        showModal("Loading", "Please wait...", "fas fa-circle-notch fa-spin");
        const url = await createCheckout(amount);
        if (!url) {
            return showModal("Error", "Something went wrong", "fas fa-warning");
        }
        router.push(url);
    }

    const updateAmount = (e: any) => {
        let value = e.target.value;
        if (!/^\d*$/.test(value)) {
            value = value.replace(/\D/g, "");
            e.target.value = value;
        } else if (value < 10) {

            e.target.style.border = "1px solid red";
        } else if (value > 3000) {

            e.target.style.border = "1px solid red";
        } else {

            e.target.style.border = "1px solid #ccc";
        }
        setAmount(e.target.value);
    }

    return (
        <div className={styles.layout}>
            <div className={styles.content}>
                <input type={"number"} defaultValue={amount}
                       onChange={updateAmount} placeholder={"Amount"} className={styles.amount}/>
                <p className={styles.description}>MXN</p>
                <button className={styles.button} onClick={donate}>Donate</button>
            </div>
        </div>
    )
}