import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "../service/register.service";
import { AppDataStorage, STORAGE_KEY } from "@/lib/data-storage";
import { authActions } from "@/store/auth/authSlice";
import { parseLocations } from "../utils/parse-locations";

export const useRegister = ({
  registerService,
}: {
  registerService: RegisterService;
}) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { provinces, districts, wards } = parseLocations();

  const register = useCallback(
    async (params: {
      name: string;
      phone: string;
      address: string;
      province: string;
      district: string;
      ward: string;
    }) => {
      setStatus("submitting");
      setError(null);
      registerService
        .register(params)
        .then((rs) => {
          if (rs.accessToken) {
            AppDataStorage.getInstance().set(
              STORAGE_KEY.XTS_TOKEN,
              rs.accessToken
            );
            dispatch(
              authActions.setUser({
                name: params.name,
                phone: params.phone,
                address: params.address,
                addressArea: `${params.ward}, ${params.district}, ${params.province}`,
                id: "1",
              })
            );
            setStatus("success");
            navigate("/profile");
          } else {
            setStatus("error");
            setError("Lỗi trong khi đăng kí tài khoản");
          }
        })
        .catch(() => {
          setStatus("error");
          setError("Lỗi đăng kí tài khoản");
        });
    },
    []
  );

  return { register, status, error, provinces, districts, wards };
};
