import Screen from "./Screen";

export type PaneMode = "single" | "multiple";

/**
 * 画面分割に関する計算を行う
 */
export default class Pane {

  constructor(private screen: Screen) {
  }

  getPaneMode(): PaneMode {
    console.log("getPaneMode");
    console.log("orientation", this.screen.getOrientation());

    if (this.screen.getShortSideWidth() < 720) {
      switch(this.screen.getOrientation()) {
        case "portrait":
          return "single";
        case "landscape":
          return "multiple";
        default:
          throw Error("unknown orientation");
      }
    } else {
      return "multiple";
    }
  }
}