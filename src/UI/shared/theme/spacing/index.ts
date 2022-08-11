import { RFValue } from "react-native-responsive-fontsize";

type SpacingProps = {
  n2: number;
  n4: number;
  n6: number;
  n8: number;
  n10: number;
  n12: number;
  n16: number;
  n18: number;
  n20: number;
  n24: number;
  n32: number;
  n40: number;
};

export const spacing: SpacingProps = {
  n2: RFValue(2),
  n4: RFValue(4),
  n6: RFValue(6),
  n8: RFValue(8),
  n10: RFValue(10),
  n12: RFValue(12),
  n16: RFValue(16),
  n18: RFValue(18),
  n20: RFValue(20),
  n24: RFValue(24),
  n32: RFValue(32),
  n40: RFValue(40),
};
