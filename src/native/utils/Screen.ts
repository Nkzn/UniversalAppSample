import { Dimensions } from "react-native";

export type Orientation = "portrait" | "landscape";

export default class Screen {

  constructor(public width: number = -1, public height: number = -1) {
    if (width == -1 || height == -1) {
      const windowSize = Dimensions.get("window");
      this.width = windowSize.width;
      this.height = windowSize.height;
    }
  }

  getOrientation(): Orientation {
    console.log(`getOrientation`);
    console.log(`width: ${this.width}, height: ${this.height}`);
    return this.width > this.height ? "landscape" : "portrait";
  }

  getShortSideWidth(): number {
    return this.width > this.height ? this.height : this.width;
  }

  isPhone(): boolean {
    return this.getShortSideWidth() < 600;
  }
}
