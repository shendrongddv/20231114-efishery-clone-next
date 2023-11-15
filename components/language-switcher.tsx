import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const LanguageSwitcher = () => {
  return (
    <Button variant="outline" size="sm" className="w-max">
      ID
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
