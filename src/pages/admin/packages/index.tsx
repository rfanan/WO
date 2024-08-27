import { useAuth } from "@/lib/auth";
import { COLOR } from "@/styles/color";

export default function Packages() {
  const { user } = useAuth();

  return (
    <div style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: '200',
      background: COLOR.defaultBackground,
      borderRadius: 8,
    }}>
      Admin Package
    </div>
  );
}
