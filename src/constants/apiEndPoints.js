export const BACKEND_URL = "http://localhost:8000/";

export const GET_ALL_EVENTS = {
  url: "api/events",
  method: "get",
};

export const GET_EVENTS_BY_ID = (eventId) => ({
  url: `api/events/${eventId}`,
  method: "get",
});

export const UPDATE_EVENTS_BY_ID = (eventId) => ({
  url: `api/events/${eventId}`,
  method: "patch",
});
