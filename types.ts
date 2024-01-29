import { Server, Member, Profile } from "@prisma/client"

export type ServerWithMembersWithProfile = Server & {
    members: (Member & {profile: Profile})[];
}