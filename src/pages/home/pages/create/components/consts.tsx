import { ReactNode } from "react";

export interface IStep {
	id: number;
	name: string;
}

const stepsList: IStep[] = [
	{
		id: 1,
		name: "Joy haqida",
	},
	{
		id: 2,
		name: "Joy rasmlari",
	},
	{
		id: 3,
		name: "Joylashuv ma’lumotlari",
	},
	{
		id: 4,
		name: "Joy turi",
	},
	{
		id: 5,
		name: "Ish vaqtlari",
	},
	{
		id: 6,
		name: "Havolalar",
	},
	{
		id: 7,
		name: "Qo’shimcha ma’lumotlar",
	},
	{
		id: 8,
		name: "Arizachi ma’lumoti",
	},
];

export const additionalInformations = [
	{
		name: "Wi-fi",
	},
	{
		name: "Yetkazib berish",
	},
	{
		name: "Dam olish xonasi",
	},
	{
		name: "Hojatxona",
	},
	{
		name: "Karta orqali to’lov",
	},
	{
		name: "Do’stona",
	},
	{
		name: "Halol",
	},
	{
		name: "24 soat",
	},
	{
		name: "Bepul nonushta",
	},
	{
		name: "Konditsioner",
	},
	{
		name: "Kir yuvish xizmati",
	},
	{
		name: "Aeroport xizmati",
	},
	{
		name: "O’yin maydoni",
	},
];

export const weekDays: { name: string; day: number }[] = [
	{ name: "Dushanba", day: 1 },
	{ name: "Seshanba", day: 2 },
	{ name: "Chorshanba", day: 3 },
	{ name: "Payshanba", day: 4 },
	{ name: "Juma", day: 5 },
	{ name: "Shanba", day: 6 },
	{ name: "Yakshanba", day: 7 },
];

export const places: { groupname: string; children: { name: string; id: number; value: string }[] }[] = [
	{
		groupname: "Ovqatlanish",
		children: [
			{
				id: 1,
				name: "Fast food",
				value: "fast_food",
			},
			{
				id: 2,
				name: "Kafe",
				value: "cafe",
			},
			{
				id: 3,
				name: "Restoran",
				value: "restaurant",
			},
			{
				id: 4,
				name: "Choyxona",
				value: "",
			},
		],
	},
	{
		groupname: "Xizmat ko’rsatish",
		children: [
			{
				id: 1,
				name: "Tikishxona",
				value: "custom_tailor",
			},
			{
				id: 2,
				name: "Ximchistka",
				value: "chemical_cleaning",
			},
			{
				id: 3,
				name: "Gilam yuvish",
				value: "",
			},
		],
	},
	{
		groupname: "Dorixona",
		children: [
			{
				id: 1,
				name: "Dorixona",
				value: "pharmacy",
			},
			{
				id: 2,
				name: "Ved dorixona",
				value: "ved_pharmacy",
			},
			{
				id: 3,
				name: "Agro dorixona",
				value: "agro_pharmacy",
			},
		],
	},
	{
		groupname: "Avtombillarga",
		children: [
			{
				id: 1,
				name: "Metan",
				value: "metan_station",
			},
			{
				id: 2,
				name: "Dizel",
				value: "dizel_station",
			},
			{
				id: 3,
				name: "Propan",
				value: "propan_station",
			},
			{
				id: 4,
				name: "Benzin",
				value: "benzin_station",
			},
			{
				id: 5,
				name: "Avtomoyka",
				value: "car_wash",
			},
			{
				id: 6,
				name: "Elektro quvvatlash",
				value: "electr_station",
			},
			{
				id: 7,
				name: "Sam moyka",
				value: "self_wash",
			},
			{
				id: 8,
				name: "Shina montaj",
				value: "engine_repair",
			},
			{
				id: 9,
				name: "Avto ustaxona",
				value: "Auto_repair_shop",
			},
		],
	},
	{
		groupname: "Kasalxona",
		children: [
			{
				id: 1,
				name: "Stamotolog",
				value: "dental_clinic",
			},
			{
				id: 2,
				name: "Medservis",
				value: "medical_clinic",
			},
			{
				id: 3,
				name: "Dianostika",
				value: "",
			},
			{
				id: 4,
				name: "Shifoxona",
				value: "",
			},
		],
	},
	{
		groupname: "Sport",
		children: [
			{
				id: 1,
				name: "KiberSport",
				value: "",
			},
			{
				id: 2,
				name: "Stadion",
				value: "stadium",
			},
			{
				id: 3,
				name: "Bovling",
				value: "bouling",
			},
			{
				id: 4,
				name: "Billiard",
				value: "billiad",
			},
			{
				id: 5,
				name: "Trenajor zal",
				value: "gym",
			},
			{
				id: 6,
				name: "Suzish",
				value: "swiming_pool",
			},
			{
				id: 7,
				name: "Ot klubi",
				value: "horse_club",
			},
			{
				id: 8,
				name: "Stol tennisi",
				value: "ping_pong",
			},
			{
				id: 9,
				name: "Muz saroy",
				value: "ice_hockey",
			},
		],
	},
	{
		groupname: "Transport",
		children: [
			{
				id: 1,
				name: "Metro",
				value: "subway_station",
			},
		],
	},
	{
		groupname: "Bank xizmatlari",
		children: [
			{
				id: 1,
				name: "Bankomat",
				value: "atm",
			},
		],
	},
	{
		groupname: "Go'zallik",
		children: [
			{
				id: 1,
				name: "Barbershop",
				value: "barber_shop",
			},
			{
				id: 2,
				name: "Kosmetolog",
				value: "beautician",
			},
			{
				id: 3,
				name: "Kosmetika",
				value: "cosmetics",
			},
			{
				id: 4,
				name: "Go’zallik saloni",
				value: "",
			},
		],
	},
	{
		groupname: "Do’kon",
		children: [
			{
				id: 1,
				name: "Oziq ovqat",
				value: "supermarket",
			},
			{
				id: 2,
				name: "Kiyim kechak",
				value: "clothing_store",
			},
			{
				id: 3,
				name: "Qurilish",
				value: "xozmag",
			},
		],
	},
	{
		groupname: "Boshqa",
		children: [
			{
				id: 1,
				name: "Mehmonxona",
				value: "hotel",
			},
			{
				id: 2,
				name: "Masjid",
				value: "mosque",
			},
			{
				id: 3,
				name: "Davlat xizmatlari",
				value: "political",
			},
		],
	},
];

export default stepsList;
