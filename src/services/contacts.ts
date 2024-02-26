/**
 * @author Prakhar Richhariya <prakharrichhariya@gmail.com>
 * @description Contact service
 */
import axios from "axios";
import config from "../config/config";
import { CONTACT } from "../constants/backend.constants";

type ListContactApi = {
  query?: Record<string, any>;
};

const listContacts = (args?: ListContactApi) => {
  let url = config.BACKEND_BASE + CONTACT.LIST;
  // Fetching the contacts
  let query = args?.query || {};
  return axios.get(url, {
    params: query,
  });
};

export { listContacts };
