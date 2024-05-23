import React, { useEffect } from "react";
import {
	YMaps,
	Map,
	Placemark,
	ZoomControl,
	SearchControl,
	FullscreenControl,
	TypeSelector,
	GeolocationControl,
} from "@pbe/react-yandex-maps";

import locationImg from "assets/images/location.png";
import { FormikValues } from "formik";
import { useHooks } from "hooks";
interface DraggableMarkerMapProps {
	apiKey?: string;
	setFieldValue: (name: string, value: any) => void;
	values: FormikValues;
}

const YaMap: React.FC<DraggableMarkerMapProps> = ({
	apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY,
	setFieldValue,
	values,
}) => {
	const { get } = useHooks();
	const [coordinates, setCoordinates] = React.useState<[number, number]>([0, 0]);
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords;
					setCoordinates([latitude, longitude]);
					setCoorValues({ lat: latitude, lng: longitude });
				},
				error => {
					console.error("Error getting user's location:", error);
				}
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	}, []);

	const handleMapClick = (event: ymaps.IEvent) => {
		const coords = event.get("coords") as [number, number];
		setCoordinates(coords);
	};

	const handleDragEnd = (event: ymaps.IEvent) => {
		const coords = event.get("target").geometry.getCoordinates() as [number, number];
		setCoordinates(coords);
	};

	useEffect(() => {
		setCoorValues({ lat: coordinates[0], lng: coordinates[1] });
	}, [coordinates]);

	function setCoorValues({ lat, lng }: { lat: number; lng: number }) {
		setFieldValue("latitude", lat);
		setFieldValue("longitude", lng);
	}

	if (!apiKey) {
		return <div>Loading...</div>;
	}

	return (
		<YMaps query={{ apikey: apiKey }}>
			<Map
				state={{ center: [get(values, "latitude"), get(values, "longitude")], zoom: 9 }}
				width='100%'
				height='330px'
				onClick={handleMapClick}
			>
				<ZoomControl />
				<SearchControl />
				<TypeSelector />
				<GeolocationControl options={{ float: "right", position: { bottom: 30, right: 15 } }} />
				<FullscreenControl />
				<Placemark
					geometry={[get(values, "latitude"), get(values, "longitude")]}
					options={{
						iconLayout: "default#image",
						iconImageHref: locationImg,
						iconImageSize: [60, 80],
						iconImageOffset: [-30, -80],
						draggable: true,
					}}
					onDragEnd={handleDragEnd}
				/>
			</Map>
		</YMaps>
	);
};

export default YaMap;
