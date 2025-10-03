// import type React from "react";

// Figma assets reserved for future icon variants (kept for parity with design)
// const imgIcon = "http://localhost:3845/assets/c0f1b1e84f1a647d7012817408ad54c00b58342b.svg";
// const imgIcon1 = "http://localhost:3845/assets/2a7d12df49d7097544637e24471f1b67ec39fa13.svg";

type FigmaButtonSize = "Medium" | "Small";
type FigmaButtonVariant = "Primary" | "Neutral" | "Subtle";
type FigmaButtonState = "Default" | "Hover" | "Disabled";

interface FigmaButtonProps {
  label?: string;
  variant?: FigmaButtonVariant;
  state?: FigmaButtonState;
  size?: FigmaButtonSize;
}

function FigmaButtonLocal({ label = "Button", variant = "Primary", state = "Default", size = "Medium" }: FigmaButtonProps) {
  if (variant === "Neutral" && state === "Default" && size === "Medium") {
    return (
      <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] size-full" data-name="Variant=Neutral, State=Default, Size=Medium" data-node-id="4185:3791">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative size-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre" data-node-id="4185:3793">
            {label}
          </p>
        </div>
      </div>
    );
  }
  if (variant === "Subtle" && state === "Default" && size === "Medium") {
    return (
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] size-full" data-name="Variant=Subtle, State=Default, Size=Medium" data-node-id="4185:3803">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#303030] text-[16px] text-nowrap whitespace-pre" data-node-id="4185:3805">
          {label}
        </p>
      </div>
    );
  }
  if (variant === "Primary" && state === "Default" && size === "Small") {
    return (
      <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] size-full" data-name="Variant=Primary, State=Default, Size=Small" data-node-id="4185:3815">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap whitespace-pre" data-node-id="4185:3781">
            {label}
          </p>
        </div>
      </div>
    );
  }
  if (variant === "Neutral" && state === "Default" && size === "Small") {
    return (
      <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] size-full" data-name="Variant=Neutral, State=Default, Size=Small" data-node-id="4185:3827">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre" data-node-id="4185:3793">
            {label}
          </p>
        </div>
      </div>
    );
  }
  if (variant === "Subtle" && state === "Default" && size === "Small") {
    return (
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] size-full" data-name="Variant=Subtle, State=Default, Size=Small" data-node-id="4185:3839">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap whitespace-pre" data-node-id="4185:3793">
          {label}
        </p>
      </div>
    );
  }
  return (
    <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] size-full" data-name="Variant=Primary, State=Default, Size=Medium" data-node-id="4185:3779">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative size-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-none not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap whitespace-pre" data-node-id="4185:3781">
          {label}
        </p>
      </div>
    </div>
  );
}

export function FigmaButtonsStrip() {
  return (
    <div className="border border-[#303030] border-solid box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full" data-name="Buttons" data-node-id="9767:319">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Medium" data-node-id="9767:296">
        <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:254">
          <FigmaButtonLocal label="Primary Button M" />
        </div>
        <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:258">
          <FigmaButtonLocal label="Neutral Button M" variant="Neutral" />
        </div>
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:262">
          <FigmaButtonLocal label="Subtle Button M" variant="Subtle" />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Small" data-node-id="9767:320">
        <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:321">
          <FigmaButtonLocal label="Primary Button S" size="Small" />
        </div>
        <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:322">
          <FigmaButtonLocal label="Neutral Button S" variant="Neutral" size="Small" />
        </div>
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:323">
          <FigmaButtonLocal label="Subtle Button S" variant="Subtle" size="Small" />
        </div>
      </div>
    </div>
  );
}
