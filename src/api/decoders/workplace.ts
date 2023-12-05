import Decoder, {
    array,
    boolean,
    field,
    number,
    string,
    succeed
} from "jsonous";
import { WorkplaceInterface } from "interfaces/workplace";
import { isNullable } from "./fullInfo";

export const workplaceDecoders: Decoder<WorkplaceInterface[]> = array(succeed({})
    .assign("id", field("id", string))
    .assign("floorId", field("floorId", string))
    .assign("floorName", field("floorName", string))
    .assign("buildingId", field("buildingId", string))
    .assign("buildingName", field("buildingName", string))
    .assign("companyId", field("companyId", string))
    .assign("companyName", field("companyName", isNullable(succeed(null), null)))
    .assign("menuId", field("menuId", isNullable(succeed(null), null)))
    .assign("menuName", field("menuName", isNullable(succeed(null), null)))
    .assign("type", field("type", number))
    .assign("name", field("name", string))
    .assign("isActive", field("isActive", boolean))
    .assign("hasTablet", field("hasTablet", boolean))
)