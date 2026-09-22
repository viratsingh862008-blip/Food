import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  ShoppingBag,
  Star
} from "lucide-react";
import { business, businessImages } from "./data";
import MenuPage from "./MenuPage";
import AdminPanel from "./AdminPanel";
import { useSiteConfig } from "./siteConfig";

function PublicSite() {
  const site = useSiteConfig();
  const [sent, setSent] = useState(false);
  useReveal();

export default function App() {
  if (window.location.pathname === "/admin") return <AdminPanel />;
  if (window.location.pathname === "/menu") return <MenuPage />;
  return <PublicSite />;
}
