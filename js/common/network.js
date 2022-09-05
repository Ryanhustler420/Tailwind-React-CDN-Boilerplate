const server = {
    sandbox: `http://localhost:3003/v1`,
    live: `https://yourdomain/v1`
}
const localhost = server.sandbox // `http://127.0.0.1:3002`
const partial = (isLive() ? server.live : server.sandbox) + `/v1/api/v1`;
const redirect_url = `${partial}/google_oauth/redirect`;
const routes = {
    GET_STATUS_STUDENTS: `${partial}/status/students`,
    GET_STATUS_COURSES: `${partial}/status/courses`,
    GET_STATUS_REQUEST_CALLBACKS: `${partial}/status/request_callbacks`,
    GET_STUDENTS: `${partial}/students`,
    GET_STUDENT: `${partial}/student`,
    POST_STUDENT_CREATE: `${partial}/student/create`,
    POST_STUDENT_DELETE: `${partial}/student/delete`,
    POST_STUDENT_UPDATE: `${partial}/student/update`,
    GET_REQUEST_CALLBACKS: `${partial}/request_callbacks`,
    GET_REQUEST_CALLBACK: `${partial}/request_callback`,
    POST_REQUEST_CALLBACK_CREATE: `${partial}/request_callback/create`,
    POST_REQUEST_CALLBACK_DELETE: `${partial}/request_callback/delete`,
    GET_COURSES: `${partial}/courses`,
    GET_COURSE: `${partial}/course`,
    POST_COURSE_CREATE: `${partial}/course/create`,
    POST_COURSE_UPDATE: `${partial}/course/update`,
    POST_COURSE_DELETE: `${partial}/course/delete`,
    POST_CONF: `${partial}/conf`,
    GET_CONF: `${partial}/conf`,
    DELETE_CONF: `${partial}/conf`,
};

const network_states = {
    isSomethingAlreadyRequest: false,
}