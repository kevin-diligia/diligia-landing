import { Stack } from "@mantine/core";
import { HeroSection } from "./hero";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { AudienceStrip } from "./audience";
import { ProblemsSection } from "./problems";
import { PhasesSection } from "./phases";
import { BottomCtaSection } from "./bottom-cta";
import Form from "./form";

const HomeSection = () => {
  return (
    <Stack gap={0}>
      <HeroSection />
      <AudienceStrip />
      <ProblemsSection />
      <PhasesSection />
      <BottomCtaSection />
      <Form />
    </Stack>
  );
};

export default HomeSection;