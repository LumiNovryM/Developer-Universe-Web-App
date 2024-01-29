"use client";

import { ServerWithMembersWithProfile } from "@/types";
import { MemberRole } from "@prisma/client";

interface ServerHeaderProps {
    server: ServerWithMembersWithProfile;
    role?: MemberRole
}

export const ServerHeader = ({server, role}: ServerHeaderProps) => {
    return (
        <div>
            Server Header!
       </div>
    )
}