import { API } from "@deltalab-corp/ddgn-test";
export const api = new API(process.env.NEXT_PUBLIC_API_URL!);

export async function getInfo() {
  const [res, error] = await api.account.signup({
    name: "test",
  });
  if (error == null) {
  } else {
    error.code;
  }
}
