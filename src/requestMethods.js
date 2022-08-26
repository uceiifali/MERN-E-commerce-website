import axios from "axios";

const BASE_URL =
  process.env.BACKEND || "https://mernecomercewebsite.herokuapp.com/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmVhYjI2ZTgwOWRjNThkMGI5MDI5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ5MTU1NywiZXhwIjoxNjYxNzUwNzU3fQ.8iDLA7MEtUWBTSrd6hg8jAu3M_lfeM5g366Nqqq1TD0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Snake  ${TOKEN}` },
});
