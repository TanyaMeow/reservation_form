import Decoder, {
    array,
    boolean,
    field,
    number,
    string,
    succeed
} from "jsonous";
import { FullInfoInterface } from "../../interfaces/fullInfo";
import { ok } from "resulty";

export function isNullable<T>(decoder: Decoder<T>, defaultValue: T | null = null): Decoder<T | null> {
    return new Decoder<T | null>((value) => {
        return decoder.decodeAny(value).cata({
            Ok: (value: T) => ok<string, T>(value),
            Err: () => ok<string, T | null>(defaultValue),
        });
    });
}

export const fullInfoDecoders: Decoder<FullInfoInterface> = succeed({})
    .assign("id", field("id", string))
    .assign("shortName", field("shortName", string))
    .assign("lastName", field("lastName", string))
    .assign("firstName", field("firstName", string))
    .assign("patronymic", field("patronymic", string))
    .assign("permissionsIds", field("permissionsIds", array(string)))
    .assign("roleId", field("roleId", string))
    .assign("roleName", field("roleName", string))
    .assign("copyMessagesToEmail", field("copyMessagesToEmail", boolean))
    .assign("copyNotificationsToEmail", field("copyNotificationsToEmail", boolean))
    .assign("companyId", field("companyId", string))
    .assign("departmentId", field("departmentId", isNullable(succeed(null), null)))
    .assign("companyName", field("companyName", string))
    .assign("departmentName", field("departmentName", string))
    .assign("phone", field("phone", string))
    .assign("phoneCountryCode", field("phoneCountryCode", string))
    .assign("email", field("email", string))
    .assign("position", field("position", isNullable(succeed(null), null)))
    .assign("isAdmin", field("isAdmin", boolean))
    .assign("avatar", field("avatar", string))
    .assign("preferredLanguage", field("preferredLanguage", number))