import { parseDisplayPrefs } from "@/lib/profile-display";
import { designButtonStyle, fontPairingOf } from "@/lib/profile-design";
import { resolveComponentDesign, type ComponentScope } from "@/lib/theme-engine";

export function qaDesign(raw: unknown, scope: ComponentScope, surface: { card: string; border: string; text: string; muted: string }) {
  const prefs = parseDisplayPrefs(raw);
  const d = resolveComponentDesign(prefs, prefs.themeOverrides, scope);
  return {
    ...(designButtonStyle({ ...d, buttonsCustom: d.buttonsCustom || d.hasButtonOverride }, { ...surface, bg: surface.card }) ?? {}),
    ...(d.typographyCustom || d.hasButtonOverride ? { fontFamily: fontPairingOf(d.fontPairing).body } : {}),
  };
}