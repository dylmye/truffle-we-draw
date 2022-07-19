import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
.c-home {
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  & > h1 {
    font-size: 16px;
    text-align: center;
    margin: 0;
  }
  & > .c-actions {
    display: flex;
    justify-content: space-between;

    & > .button {
      background: rgba(255, 0, 0, 0.5);
      border: none;
      padding: 8px;
      margin-top: 4px;
      cursor: pointer;
    }
  }
}`;
