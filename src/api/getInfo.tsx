import { API } from "@deltalab-corp/ddgn-test";
export const api = new API("https://api.deltalab.corp");

export async function getInfo() {
  const [res, error] = await api.account.signup({
    name: "test",
  });
  if (error == null) {
  } else {
    error.code;
  }
}
