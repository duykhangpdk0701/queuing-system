enum Login {
  SUCCESS,
  LOADING,
  FAIL,
}

export interface ILoginSuccess {
  type: typeof Login.SUCCESS;
}
