import { Skills } from "@/components/skills/Skills";

export const metadata = {
  title: "Technical Skills | Kishan M. Patil",
  description:
    "Languages, frameworks, 3D graphics tools, backend APIs, and developer tooling used by Kishan M. Patil.",
};

export default function SkillsPage() {
  return (
    <div className="py-6 sm:py-10">
      <Skills />
    </div>
  );
}
