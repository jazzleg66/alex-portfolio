// Black & white pixel art SVG icons for Skills page
// All icons use a 16x16 pixel grid, rendered at 32x32px
// Colors: #1A1A1A (black), #FFFFFF (white), transparent bg

type IconProps = { size?: number; className?: string };

export function IconAI({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Robot face — pixel art */}
      {/* Antenna */}
      <rect x="7" y="0" width="2" height="1" fill="#1A1A1A" />
      <rect x="6" y="1" width="4" height="1" fill="#1A1A1A" />
      {/* Head outline */}
      <rect x="2" y="2" width="12" height="9" fill="#1A1A1A" />
      <rect x="3" y="3" width="10" height="7" fill="#FFFFFF" />
      {/* Eyes */}
      <rect x="4" y="4" width="3" height="3" fill="#1A1A1A" />
      <rect x="9" y="4" width="3" height="3" fill="#1A1A1A" />
      <rect x="5" y="5" width="1" height="1" fill="#FFFFFF" />
      <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />
      {/* Mouth */}
      <rect x="4" y="8" width="8" height="1" fill="#1A1A1A" />
      <rect x="5" y="8" width="2" height="1" fill="#FFFFFF" />
      <rect x="9" y="8" width="2" height="1" fill="#FFFFFF" />
      {/* Neck */}
      <rect x="6" y="11" width="4" height="1" fill="#1A1A1A" />
      {/* Body */}
      <rect x="1" y="12" width="14" height="4" fill="#1A1A1A" />
      <rect x="2" y="13" width="12" height="2" fill="#FFFFFF" />
      {/* Body detail — circuit dots */}
      <rect x="4" y="13" width="1" height="1" fill="#1A1A1A" />
      <rect x="7" y="13" width="2" height="1" fill="#1A1A1A" />
      <rect x="11" y="13" width="1" height="1" fill="#1A1A1A" />
    </svg>
  );
}

export function IconFrontend({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Monitor bezel */}
      <rect x="0" y="1" width="16" height="11" fill="#1A1A1A" />
      <rect x="1" y="2" width="14" height="9" fill="#FFFFFF" />
      {/* Screen content — code brackets < /> */}
      <rect x="2" y="5" width="1" height="3" fill="#1A1A1A" />
      <rect x="3" y="4" width="1" height="1" fill="#1A1A1A" />
      <rect x="3" y="8" width="1" height="1" fill="#1A1A1A" />
      {/* / */}
      <rect x="6" y="4" width="1" height="5" fill="#1A1A1A" />
      <rect x="5" y="8" width="1" height="1" fill="#1A1A1A" />
      <rect x="7" y="4" width="1" height="1" fill="#1A1A1A" />
      {/* > */}
      <rect x="9" y="5" width="1" height="3" fill="#1A1A1A" />
      <rect x="8" y="4" width="1" height="1" fill="#1A1A1A" />
      <rect x="8" y="8" width="1" height="1" fill="#1A1A1A" />
      {/* Stand */}
      <rect x="6" y="12" width="4" height="2" fill="#1A1A1A" />
      {/* Base */}
      <rect x="4" y="14" width="8" height="1" fill="#1A1A1A" />
    </svg>
  );
}

export function IconBackend({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gear — pixel art */}
      {/* Gear teeth top/bottom */}
      <rect x="6" y="0" width="4" height="2" fill="#1A1A1A" />
      <rect x="6" y="14" width="4" height="2" fill="#1A1A1A" />
      {/* Gear teeth left/right */}
      <rect x="0" y="6" width="2" height="4" fill="#1A1A1A" />
      <rect x="14" y="6" width="2" height="4" fill="#1A1A1A" />
      {/* Gear teeth diagonal */}
      <rect x="2" y="2" width="2" height="2" fill="#1A1A1A" />
      <rect x="12" y="2" width="2" height="2" fill="#1A1A1A" />
      <rect x="2" y="12" width="2" height="2" fill="#1A1A1A" />
      <rect x="12" y="12" width="2" height="2" fill="#1A1A1A" />
      {/* Main gear body */}
      <rect x="2" y="4" width="12" height="8" fill="#1A1A1A" />
      <rect x="4" y="2" width="8" height="12" fill="#1A1A1A" />
      {/* Inner fill */}
      <rect x="3" y="5" width="10" height="6" fill="#FFFFFF" />
      <rect x="5" y="3" width="6" height="10" fill="#FFFFFF" />
      {/* Center hole */}
      <rect x="5" y="5" width="6" height="6" fill="#1A1A1A" />
      <rect x="6" y="6" width="4" height="4" fill="#FFFFFF" />
    </svg>
  );
}

export function IconDatabase({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Database cylinder — 3 stacked discs */}
      {/* Top disc */}
      <rect x="2" y="0" width="12" height="4" fill="#1A1A1A" />
      <rect x="3" y="1" width="10" height="2" fill="#FFFFFF" />
      <rect x="4" y="1" width="8" height="1" fill="#1A1A1A" />
      {/* Middle disc */}
      <rect x="2" y="5" width="12" height="4" fill="#1A1A1A" />
      <rect x="3" y="6" width="10" height="2" fill="#FFFFFF" />
      <rect x="4" y="6" width="8" height="1" fill="#1A1A1A" />
      {/* Bottom disc */}
      <rect x="2" y="10" width="12" height="4" fill="#1A1A1A" />
      <rect x="3" y="11" width="10" height="2" fill="#FFFFFF" />
      <rect x="4" y="11" width="8" height="1" fill="#1A1A1A" />
      {/* Side walls connecting discs */}
      <rect x="2" y="4" width="2" height="2" fill="#1A1A1A" />
      <rect x="12" y="4" width="2" height="2" fill="#1A1A1A" />
      <rect x="2" y="9" width="2" height="2" fill="#1A1A1A" />
      <rect x="12" y="9" width="2" height="2" fill="#1A1A1A" />
    </svg>
  );
}

export function IconDevTools({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wrench pixel art */}
      {/* Wrench head (top) */}
      <rect x="8" y="0" width="4" height="2" fill="#1A1A1A" />
      <rect x="7" y="1" width="6" height="2" fill="#1A1A1A" />
      <rect x="8" y="3" width="4" height="1" fill="#1A1A1A" />
      {/* Wrench gap */}
      <rect x="9" y="1" width="2" height="2" fill="#FFFFFF" />
      {/* Wrench neck/body diagonal */}
      <rect x="7" y="4" width="3" height="2" fill="#1A1A1A" />
      <rect x="6" y="6" width="3" height="2" fill="#1A1A1A" />
      <rect x="5" y="8" width="3" height="2" fill="#1A1A1A" />
      <rect x="4" y="10" width="3" height="2" fill="#1A1A1A" />
      <rect x="3" y="12" width="3" height="2" fill="#1A1A1A" />
      {/* Wrench handle end */}
      <rect x="2" y="13" width="4" height="3" fill="#1A1A1A" />
      <rect x="3" y="14" width="2" height="1" fill="#FFFFFF" />
    </svg>
  );
}

export function IconBusiness({ size = 32, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={className}
      style={{ imageRendering: "pixelated" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bar chart — pixel art */}
      {/* Y-axis */}
      <rect x="1" y="0" width="2" height="13" fill="#1A1A1A" />
      {/* X-axis */}
      <rect x="1" y="13" width="14" height="2" fill="#1A1A1A" />
      {/* Bar 1 (short) */}
      <rect x="4" y="9" width="2" height="4" fill="#1A1A1A" />
      <rect x="4" y="10" width="2" height="2" fill="#FFFFFF" />
      {/* Bar 2 (medium) */}
      <rect x="7" y="5" width="2" height="8" fill="#1A1A1A" />
      <rect x="7" y="6" width="2" height="6" fill="#FFFFFF" />
      {/* Bar 3 (tall) */}
      <rect x="10" y="2" width="2" height="11" fill="#1A1A1A" />
      <rect x="10" y="3" width="2" height="9" fill="#FFFFFF" />
      {/* Bar 4 (medium-tall) */}
      <rect x="13" y="4" width="2" height="9" fill="#1A1A1A" />
      <rect x="13" y="5" width="2" height="7" fill="#FFFFFF" />
    </svg>
  );
}
