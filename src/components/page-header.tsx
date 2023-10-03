import { CommandMenu } from "@/components/command-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md shadow-slate-700/10 supports-backdrop-blur:bg-background/60 dark:bg-background/75 bg-background/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between w-full h-14">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="text-lg font-bold">blog do frango</span>
        </div>

        <CommandMenu />
      </div>
    </header>
  );
}
