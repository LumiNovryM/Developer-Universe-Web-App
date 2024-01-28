"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";

export const NavigationAction = () => {
  return (
    <ActionTooltip
        side="right"
        align="center"
        label="Add a server"
    >
      <div>
        <button className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] border rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-[#12121e] group-hover:bg-teal-500">
            <Plus
              className="group-hover:text-white transition text-teal-500"
              size={25}
            />
          </div>
        </button>
      </div>
    </ActionTooltip>
  );
};
