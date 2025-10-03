const imgIcon = "http://localhost:3845/assets/c0f1b1e84f1a647d7012817408ad54c00b58342b.svg";
const imgIcon1 = "http://localhost:3845/assets/2a7d12df49d7097544637e24471f1b67ec39fa13.svg";

interface XProps {
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}

function X({ size = "48" }: XProps) {
  return (
    <div className="relative size-full" data-name="Size=48" data-node-id="4039:11293">
      <div className="absolute inset-1/4" data-name="Icon" data-node-id="7758:12632">
        <div className="absolute inset-[-8.333%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

interface StarProps {
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}

function Star({ size = "48" }: StarProps) {
  return (
    <div className="relative size-full" data-name="Size=48" data-node-id="4039:11336">
      <div className="absolute inset-[8.33%_8.33%_12.42%_8.33%]" data-name="Icon" data-node-id="7758:12320">
        <div className="absolute inset-[-5.26%_-5%]" style={{ "--stroke-0": "rgba(30, 30, 30, 1)" } as React.CSSProperties}>
          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  label?: string;
  iconEnd?: React.ReactNode | null;
  hasIconEnd?: boolean;
  hasIconStart?: boolean;
  iconStart?: React.ReactNode | null;
  variant?: "Primary" | "Neutral" | "Subtle";
  state?: "Default" | "Hover" | "Disabled";
  size?: "Medium" | "Small";
}

function Button({ label = "Button", iconEnd = null, hasIconEnd = false, hasIconStart = false, iconStart = null, variant = "Primary", state = "Default", size = "Medium" }: ButtonProps) {
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

export function Buttons() {
  return (
    <div className="border border-[#303030] border-solid box-border content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full" data-name="Buttons" data-node-id="9767:319">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Medium" data-node-id="9767:296">
        <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:254">
          <Button label="Primary Button M" />
        </div>
        <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:258">
          <Button label="Neutral Button M" variant="Neutral" />
        </div>
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:262">
          <Button label="Subtle Button M" variant="Subtle" />
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Small" data-node-id="9767:320">
        <div className="bg-[#2c2c2c] border border-[#2c2c2c] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:321">
          <Button label="Primary Button S" size="Small" />
        </div>
        <div className="bg-[#e3e3e3] border border-[#767676] border-solid relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:322">
          <Button label="Neutral Button S" variant="Neutral" size="Small" />
        </div>
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Button" data-node-id="9767:323">
          <Button label="Subtle Button S" variant="Subtle" size="Small" />
        </div>
      </div>
    </div>
  );
}
