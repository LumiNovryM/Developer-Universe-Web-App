import { redirect } from "next/navigation";
import { db } from "@/lib/db";

import { currentProfile } from "@/lib/current-profile";


export const NavigationSidebar = async () => {

    const profile = await currentProfile();

    if(!profile) return redirect("/")

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    return (
        <div className="space-y-4 flex flex-col items-center h-full w-full text-primary dark:bg-[#1b1b2c]">
            Navigation Sidebarasdasd
        </div>
    )
}