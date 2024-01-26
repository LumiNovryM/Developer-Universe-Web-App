import { redirect } from "next/navigation";
import { db } from "@/lib/db";

import { currentProfile } from "@/lib/current-profile";

import { NavigationAction } from "./navigation-action";
import { Separator } from "@/components/ui/separator";


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
        <div className="space-y-4 flex flex-col items-center h-full w-full text-primary dark:bg-[#1b1b2c] py-3">
            <NavigationAction />
            <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"/>
        </div>
    )
}