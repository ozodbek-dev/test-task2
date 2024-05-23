import { TMethod } from "services/types";

interface IEndpointObjectProps {
  url: string;
  method: TMethod | "get";
  name: string;
}
const menu = {
  GET_CALENDAR_SESSIONS_LIST: {
    url: "",
    method: "GET",
    name: "calendarsessions",
  },
  GET_STOREHOUSE_NOTIFICATIONS_LAST_THIRD_DAY_LIST: {
    url: "",
    method: "GET",
    name: "storehouse_notification_list",
  },
  GET_WHEREHOUSE_CHART_DATA: {
    url: "",
    method: "GET",
    name: "storehouse_chart_data",
  },
  GET_PATIENTS_COUNT: {
    url: "/patient/status/",
    method: "POST",
    name: "patients-count-chart",
  },
  GET_PATIENTS_TABLE_COUNT: {
    url: "/patient/number/",
    method: "GET",
    name: "patients-count-chart",
  },
};
const patients: Record<string, IEndpointObjectProps> = {
  GET_LIST: {
    url: "/patient/",
    method: "get",
    name: "get_all_patients",
  },
  POST_PATIENT: {
    url: "/patient/",
    method: "post",
    name: "create_patients",
  },
  PUT_PATIENT: {
    url: "/patient/",
    method: "put",
    name: "update_patients",
  },
  GET_PATIENT_BY_PERSON_ID: {
    url: "/patient/search/",
    method: "post",
    name: "get_patient_by_personal_id",
  },
  GET_EXAMINATION_ANALYSE_FIELDS: {
    url: "/examination/section/name",
    method: "get",
    name: "GET_EXAMINATION_ANALYSE_FIELDS",
  },
  CREATE_EXAMINATION: {
    url: "/examination/create/examination",
    method: "post",
    name: "CREATE_EXAMINATION",
  },
  GET_ALL_EXAMINATION: {
    url: "/examination/patient/all/examination/",
    method: "get",
    name: "GET_ALL_EXAMINATION",
  },
  GET_EXAMINATION_DETAIL_BY_ID: {
    url: "/examination/detail/examination/",
    method: "get",
    name: "GET_EXAMINATION_DETAIL_BY_ID",
  },
  GET_SUGGESTED_MEDICINE: {
    url: "/examination/create/suggested/medicine/name/",
    method: "get",
    name: "GET_SUGGESTED_MEDICINE",
  },
  POST_SUGGESTED_MEDICINES: {
    url: "/examination/create/given/medicine/information",
    method: "post",
    name: "POST_SUGGESTED_MEDICINES",
  },
  GET_MEDICINE_NAME_AND_DOSES: {
    url: "/storehouse/list/medicine/type/name",
    method: "get",
    name: "GET_MEDICINE_NAME_AND_DOSES",
  },
  GET_RECOMMENDED_MEDICINES_BY_EXAMINATION_ID: {
    url: "/examination/given/medicine/name/list/",
    method: "get",
    name: "GET_RECOMMENDED_MEDICINES",
  },
  GET_RECOMMENDED_MEDICINE_BY_ID: {
    url: "/examination/create/suggested/medicine/name/",
    method: "get",
    name: "GET_RECOMMENDED_MEDICINE_BY_ID",
  },
};
const warehouse = {
  GET_LIST: {
    url: "/storehouse/store/house/institution/income/expense/list",
    method: "GET",
    name: "warehouse",
  },
};
const toolsMonitoring = {
  GET_LIST: {
    url: "/storehouse/medicine/name/monitoring",
    method: "GET",
    name: "toolsMonitoringg",
  },
};
const toolArchive = {
    GET_LIST: {
      url: "/storehouse/income/expense/detail/list",
      method: "GET",
      name: "toolsArchive",
    },
    GET_ONE: {
      url: "/storehouse/detail/income/region",
      method: "GET",
      name: "tools-archive-one",
    },
};
const warehouseArchive = {
  income: {
    institution: {
      GET_LIST: {
        url: "/storehouse/list/income/institution",
        method: "GET",
        name: "warehouseArchive",
      },
      GET_ONE: {
        url: "/storehouse/detail/income/institution",
        method: "GET",
        name: "warehouse-archive-one",
      },
    },
    region: {
      GET_LIST: {
        url: "/storehouse/list/income/region",
        method: "GET",
        name: "warehouseArchiveRegion",
      },
      GET_ONE: {
        url: "/storehouse/detail/income/region",
        method: "GET",
        name: "warehouse-archive-one-region",
      },
    },
  },
  expense: {
    region: {
      GET_LIST: {
        url: "/storehouse/list/expense/region",
        method: "GET",
        name: "warehouseArchiveRegion",
      },
      GET_ONE: {
        url: "/storehouse/detail/expense/region",
        method: "GET",
        name: "warehouse-archive-one-region",
      },
    },
    institution: {
      GET_LIST: {
        url: "/storehouse/list/expense/institution",
        method: "GET",
        name: "warehouseArchive",
      },
      GET_ONE: {
        url: "/storehouse/detail/expense/institution",
        method: "GET",
        name: "warehouse-archive-one",
      },
    },
  },
};

const archive = {
  GET_LIST_PATIENTS: {
    url: "patient/archive/",
    method: "GET",
    name: "archive-patient",
  },
  GET_LIST_DOCTORS: {
    url: "doctor/archive/",
    method: "GET",
    name: "archive-doctor",
  },
  GET_SINGLE_PATIENT: {
    url: "patient/archive/",
    method: "GET",
    name: "archive-patient-single",
  }
};

const applications = {
  GET_LIST: {
    url: "/ariza/",
    method: "GET",
    name: "applications",
  },
};
const notifications: Record<string, IEndpointObjectProps> = {
  GET_LIST: {
    url: "/notifications/",
    method: "get",
    name: "notifications",
  },
  GET_LIST_SYSTEM_NOTIFICATIONS: {
    url: "/storehouse/systematic/notification/",
    method: "get",
    name: "system_notifications_",
  },
};
const doctors: Record<string, IEndpointObjectProps> = {
  GET_LIST: {
    url: "/doctor/",
    method: "get",
    name: "doctors",
  },
  GET_SESION_DOCTORS: {
    url: "/examination/doctor/all/examination/",
    method: "get",
    name: "doctors_session",
  },
  PUT_DOCTOR: {
    url: "/doctor/",
    method: "put",
    name: "doctors_edit",
  },
};

const locations = {
  GET_LOCATIONS_LIST: "/location/",
  GET_COUNTRIES_LIST: "/countries/",
  GET_INSTUTITIONS_LIST: "/institutions/",
  GET_REGONS_LIST: "/regions/",
  GET_DISTRICTS_LIST: "/districts/",
};

const localization = {
  GET_ALL_TRANSLATION: {
    url: "/translate/admin/",
    method: "get",
    name: "get_all_translation",
  },
};

export {
  locations,
  menu,
  patients,
  doctors,
  warehouse,
  toolsMonitoring,
  warehouseArchive,
  archive,
  applications,
  notifications,
  localization,
  toolArchive
};
