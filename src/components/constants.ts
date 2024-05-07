export const Patterns = {
  username: /^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
} as const;
