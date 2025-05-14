import axios from "axios";

export class API {
  static #URL =
    "https://script.google.com/macros/s/AKfycbxR15hEFdDkEL87iVjo6HI1Gt93G0jEy560wvvTRqnZ3GQOceYb0_EDNthOUHydXtbicA/exec";

  static async sendDataToGoogleSheet(body: string) {
    try {
      const response = await axios.post(this.#URL, body, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
