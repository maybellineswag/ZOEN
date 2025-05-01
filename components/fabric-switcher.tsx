"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FabricOption {
  id: string
  name: string
  color: string
}

interface FabricSwitcherProps {
  options: FabricOption[]
  defaultOption?: string
  onChange?: (option: string) => void
}

export default function FabricSwitcher({ options, defaultOption, onChange }: FabricSwitcherProps) {
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0].id)

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId)
    if (onChange) {
      onChange(optionId)
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={cn(
            "relative h-10 w-10 rounded-full border-2 transition-all",
            selectedOption === option.id
              ? "border-primary ring-2 ring-primary/20"
              : "border-border hover:border-primary/50",
          )}
          style={{ backgroundColor: option.color }}
          onClick={() => handleSelect(option.id)}
          aria-label={`Select ${option.name} fabric`}
        >
          {selectedOption === option.id && (
            <span className="absolute inset-0 flex items-center justify-center">
              <Check className="h-4 w-4 text-white drop-shadow-sm" />
            </span>
          )}
          <span className="sr-only">{option.name}</span>
        </button>
      ))}
    </div>
  )
}
