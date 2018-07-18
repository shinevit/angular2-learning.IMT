
export class ColorUtils {

  /**
   * Function to get a new random color
   */
  public static newRandomColor(): string {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

}
