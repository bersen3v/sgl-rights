export type AuthUserProps = {
  login: string;
  password: string;
};

export type AuthUserAnswer = string | undefined;

export default async function authUser({
  login,
  password,
}: AuthUserProps): Promise<AuthUserAnswer> {
  return "id14324234234";
}
