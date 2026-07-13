import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedLine from "@/components/AnimatedLine";
import { content } from "@/data/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function ClosingCTA() {
  const { lang } = useLanguage();
  const t = content[lang].ui.cta;

  return null;






















}