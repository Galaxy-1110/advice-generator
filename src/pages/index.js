import Header from "../components/header";
import Card from "../components/card";
import styles from "@/styles/Home.module.css";
import { getAdvice } from "../api";
import { useState, useEffect } from "react";

export default function Main() {
	const [advice, setAdvice] = useState();

	useEffect(() => {
		getAdvice().then(async (data) => {
			await setAdvice(data.data);
		});
	}, []);

	return (
		<>
			<Header />
			{advice && <Card advice={advice} setAdvice={setAdvice} />}
		</>
	);
}
