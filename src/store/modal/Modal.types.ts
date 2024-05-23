export interface ModalStore {
	type: ModalType | null;
	data?: any;
	isOpen?: boolean;
}
export type ModalType =
	| "deleteDoctor"
	| "deletePatient"
	| "deleteApplication"
	| "createPatient"
	| "viewSessionModal"
	| "downloadToExcel"
	| "restoreDoctor"
	| "rejectInput";
