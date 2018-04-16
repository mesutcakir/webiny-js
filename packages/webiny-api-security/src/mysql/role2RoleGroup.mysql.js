import { MySQLTable } from "webiny-api";

class Role2RoleGroup extends MySQLTable {
    constructor() {
        super();
        this.column("role")
            .char(24)
            .setNotNull();
        this.column("roleGroup")
            .char(24)
            .setNotNull();

        this.index().key("roleGroup", "role", "deleted");
    }
}

Role2RoleGroup.setName("Security_Role2RoleGroup");

export default Role2RoleGroup;