import { locations } from "@/asset/location";

type LocationOption = {
  id: string;
  name: string;
  parent: string;
};

export function parseLocations(): {
  provinces: LocationOption[];
  districts: LocationOption[];
  wards: LocationOption[];
} {
  const provinces: LocationOption[] = Object.keys(locations).map((id) => ({
    id,
    name: id,
    parent: "",
  }));
  const districts: LocationOption[] = [];
  const wards: LocationOption[] = [];

  provinces.forEach((province) => {
    const provinceData = locations[province.id];
    Object.keys(provinceData).forEach((id) => {
      districts.push({
        id,
        name: id,
        parent: province.id,
      });
    });
  });

  districts.forEach((district) => {
    const districtData = locations[district.parent][district.id];
    Object.keys(districtData).forEach((id) => {
      wards.push({
        id,
        name: id,
        parent: district.id,
      });
    });
  });

  return {
    provinces,
    districts,
    wards,
  };
}
