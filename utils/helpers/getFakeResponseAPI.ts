export enum Response {
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}

interface IResponse {
  success: boolean;
}

export const getFakeResponse = async () => {
  return await new Promise<IResponse>((resolve) => {
    const index = Math.floor(Math.random() * Object.keys(Response).length);
    const value = Object.values(Response)[index];
    setTimeout(() => {
      if (Response[value] === Response.SUCCESS) {
        resolve({
          success: true,
        });
      } else if (Response[value] === Response.FAILED) {
        resolve({
          success: false,
        });
      }
    }, 2000);
  });
};
