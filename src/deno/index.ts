import { createVersionedSpec } from "@fig/autocomplete-helpers";
const versionFiles = ["1.0.0"];
export const getVersionCommand: Fig.GetVersionCommand = async (
  executeShellCommand
) => {
  const out = await executeShellCommand("deno -V");
  return String(out.split(" ")[1]);
};
export default createVersionedSpec("deno", versionFiles);
