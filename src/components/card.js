import styles from "../styles/Home.module.css";
import { getAdvice } from "../api";
export default function Card({ advice, setAdvice }) {
	const data = advice.slip;

	return (
		<div className={styles.main}>
			<div className={styles.card}>
				<div className={styles.card_title}>Advice #{data.id}</div>
				<div className={styles.card_content}>"{data.advice}"</div>
				<div>
					{window.innerWidth > 980 ? (
						<img src="/pattern-divider-desktop.svg" alt="Pattern Desktop" />
					) : (
						<img src="/pattern-divider-mobile.svg" alt="Pattern Mobile" />
					)}
				</div>
				<div
					className={styles.dice}
					onClick={() => {
						getAdvice().then((dat) => setAdvice(dat.data));
					}}>
					<img src="/icon-dice.svg" />
				</div>
			</div>
		</div>
	);
}
