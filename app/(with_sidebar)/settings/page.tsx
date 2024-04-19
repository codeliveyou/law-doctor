import { RedirectType, redirect } from "next/navigation";

export default function Settings() {
  redirect("/settings/account", RedirectType.replace);
}