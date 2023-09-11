import { useParams } from "react-router";
import { PalletTown } from "../../pages/PalletTown/PalletTown";
import { ViridianCity } from "../../pages/ViridianCity/ViridianCity";

export const City = () => {
  const { cityName } = useParams();

  return cityName === "pallet" ? <PalletTown /> : <ViridianCity />;
};
