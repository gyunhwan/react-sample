// let base_url = process.env("BASE_URL");
let base_url = "https://gyuntact-ser.herokuapp.com";
// let base_url = "http://localhost:5000";
const ContactAPI = {
  getContacts: async () => {
    let result = null;
    try {
      result = await fetch(`${base_url}/contacts`, {
        method: "GET",
      });
    } catch (error) {
      console.error(error);
      return error;
    }
    return result;
  },
  createContact: async (body) => {
    let result = null;

    try {
      result = await fetch(`${base_url}/contacts`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        },
      });
    } catch (error) {
      console.error(error);
      return error;
    }
    return result;
  },
};
export default ContactAPI;
