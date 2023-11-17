import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export const LanguageSwitcher = ({
  showBackground,
}: {
  showBackground: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        showBackground ? "" : "text-white",
      )}
    >
      <Globe className="h-4 w-4" />
      <Select>
        <SelectTrigger className={cn("w-max gap-2 bg-transparent")}>
          <SelectValue defaultValue="id" placeholder="ID" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="id">ID</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
