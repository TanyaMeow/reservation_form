export interface FullInfoInterface {
    id: string,
    shortName: string,
    lastName: string,
    firstName: string,
    patronymic: string,
    permissionsIds: string[],
    roleId: string,
    roleName: string,
    copyMessagesToEmail: boolean,
    copyNotificationsToEmail: boolean,
    companyId: string,
    departmentId: null,
    companyName: string,
    departmentName: string,
    phone: string,
    phoneCountryCode: string,
    email: string,
    position: null,
    isAdmin: boolean,
    avatar: string,
    preferredLanguage: number
}