import { Fields } from "components";
import { FastField } from "formik";

function Step6() {
	return (
		<div className='flex mt-10 flex-col max-w-[350px] gap-8'>
			<FastField
				autoFocus={true}
				component={Fields.InputText}
				name='instagram'
				label='Web sayt uchun havola'
				placeholder='www.example.com'
			/>
			<FastField
				component={Fields.InputText}
				name='website'
				label='Instagram sahifasi uchun havola'
				placeholder='www.instagram.com'
			/>
			<FastField
				component={Fields.InputText}
				name='telegram'
				label='Telegram sahifasi uchun havola'
				placeholder='www.telegram.me'
			/>
			<FastField component={Fields.InputText} name='telegram_bot' label='Telegram bot uchun havola' placeholder='@telegram_bot' />
			<FastField
				component={Fields.InputText}
				name='facebook'
				label='Facebook sahifasi uchun havola'
				placeholder='www.facebook.com'
			/>
			<FastField
				component={Fields.InputText}
				name='twitter'
				label='Twitter sahifasi uchun havola'
				placeholder='www.twitter.com'
			/>
			<FastField
				component={Fields.InputText}
				name='youtube'
				label='Youtube sahifasi uchun havola'
				placeholder='www.youtube.com'
			/>
		</div>
	);
}

export default Step6;
