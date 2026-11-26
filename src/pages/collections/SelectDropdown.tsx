import { ChevronDown, type LucideIcon } from "lucide-react";

type SelectDropdownProps = {
  icon?: LucideIcon;
  ariaLabel: string;
  defaultLabel: string;
  options: { label: string; value: string }[];
  selectedOption: { label: string; value: string } | undefined;
  onSelectedOption: (option: { label: string; value: string }) => void;
  textAlign?: string;
};

export default function SelectDropdown({
  icon: Icon,
  ariaLabel,
  defaultLabel,
  options,
  selectedOption,
  onSelectedOption,
  textAlign,
}: SelectDropdownProps) {
  return (
    <label
      className={`relative inline-flex items-center gap-2 border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary ${textAlign === "between" ? "justify-between" : "justify-center"}`}
    >
      {Icon && <Icon aria-hidden="true" className="size-4 text-text-primary" />}
      <span className="text-text-primary">
        {selectedOption?.value == "" || !selectedOption
          ? defaultLabel
          : selectedOption?.label}
      </span>
      <ChevronDown aria-hidden="true" className="size-4 text-text-primary" />

      <select
        aria-label={ariaLabel}
        name={ariaLabel}
        id={ariaLabel}
        className="absolute inset-0 w-full opacity-0 text-text-primary bg-background"
        value={selectedOption ? selectedOption.value : ""}
        onChange={(event) => {
          const selectedOption = event.target.selectedOptions[0];
          onSelectedOption({
            label: selectedOption.label,
            value: selectedOption.value,
          });
        }}
      >
        {options &&
          options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </label>
  );
}
