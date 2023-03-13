import styles from "../styles/Home.module.css";
import { getAdvice } from "../api";
import Image from "next/image";

export default function Card({ advice, setAdvice }) {
	const data = advice.slip;

	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<div className={styles.card_title}>Advice #{data.id}</div>
				<div className={styles.card_content}>{` "${data.advice}" `}</div>
				<div>
					{window.innerWidth > 980 ? (
						<Image src="/pattern-divider-desktop.svg" alt="Pattern Desktop" />
					) : (
						<Image src="/pattern-divider-mobile.svg" alt="Pattern Mobile" />
					)}
				</div>
				<div
					className={styles.dice}
					onClick={() => {
						getAdvice().then((dat) => setAdvice(dat.data));
					}}>
					<Image src="/icon-dice.svg" alt="Dice" />
				</div>
			</div>
		</div>
	);
}
