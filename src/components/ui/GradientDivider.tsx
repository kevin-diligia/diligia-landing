import { Box } from "@mantine/core";
import classes from "./GradientDivider.module.css";

export function GradientDivider() {
  return <Box className={classes.divider} component="hr" />;
}
