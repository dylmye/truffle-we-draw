import scss from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";

export default scss`
header.dialog-header {
    margin: var(--tfl-spacing-layout-sm) var(--tfl-spacing-layout-sm);
    padding-bottom: var(--tfl-spacing-layout-sm);
    border-bottom: 1px solid var(--primary-base);
    display: flex;
    flex: 1;
    > h2 {
      flex: 1;
    }
}`;