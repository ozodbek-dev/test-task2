import { Layout, Select } from "antd";
import { i18next } from "services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setLang } from "store/system";
import logoimg from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";
const { Header } = Layout;
const HeaderComponent = () => {
	const dispatch = useDispatch();
	const { lang } = useSelector((state: RootState) => state.system);

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		i18next.changeLanguage(e.target.value);
		dispatch(setLang({ lang: e.target.value, isCollapsedSidebar: false }));
	};

	return (
		<Header className='bg-[#0a090c] border-b border-b-gray-800'>
			<div className='w-full flex justify-between items-center px-5'>
				<Link to="/">
					<img src={logoimg} className='w-[40px] h-[40px]' alt='logo' />
				</Link>
				<ul className='flex items-center justify-start text-white gap-6'>
					<li>
						<Link className='text-white/60 hover:text-white' to='/'>
							Bot xususiyatlari
						</Link>
					</li>
					<li>
						<Link className='text-white/60 hover:text-white' to='/'>
							Bizning mijozlar
						</Link>
					</li>
					<li>
						<Link className='text-white/60 hover:text-white' to='/'>
							Fikrlar
						</Link>
					</li>
					<li>
						<Link className='text-white/60 hover:text-white' to='/'>
							Ko’p beriladigan savollar
						</Link>
					</li>
				</ul>
				<div className='flex items-center !text-white'>
					<select
						value={lang}
						onChange={handleLanguageChange}
						className='bg-transparent border border-gray-800 rounded-lg h-[40px] w-[100px] px-4'
					>
						{[
							{ value: "uz", label: "O’zbek" },
							{ value: "en", label: "English" },
							{ value: "ru", label: "Русский" },
						].map(({ value, label }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</div>
			</div>
		</Header>
	);
};

export default HeaderComponent;
