import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <div>
      <p className='text-3xl font-bold text-indigo-500'>
        Hello Developer!
      </p>
      <Button>
        Click Me
      </Button>
    </div>
  )
}
