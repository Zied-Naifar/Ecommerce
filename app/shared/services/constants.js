const track = {
  list: 'learn/tracks',
  get: id => `learn/tracks/${id}`,
  getStats: id => `learn/tracks/stats/${id}`,
  subscribe: id => `learn/tracks/subscribe/${id}`,
  setDefaultTrack: trackId => `learn/tracks/set-as-default/${trackId}`,
}
const skill = {
  getSkill: trackId => `learn/skills/auto-pilot/${trackId}`,
  getSkillById: (trackId, skillId) => `learn/skills/get/${trackId}/${skillId}`,
  fetchNextSkillById: (trackId, skillId) =>
    `learn/skills/next/${trackId}/${skillId}`,
  fetchPreviousSkillById: (trackId, skillId) =>
    `learn/skills/previous/${trackId}/${skillId}`,
  postAssessmentScore: trackId => `learn/skills/complete/${trackId}`,
  reportIssues: `titan/issues`,
}
const instructorCheckpoint = {
  getAllCheckpoints: 'instructor/checkpoints',
  getCheckpointById: checkpointAssignmentId =>
    `instructor/checkpoints/${checkpointAssignmentId}`,
  addReview: checkpointAssignmentId =>
    `instructor/checkpoints/review/${checkpointAssignmentId}`,
  ownCheckpointAssignment: checkpointAssignmentId =>
    `instructor/checkpoints/own/${checkpointAssignmentId}`,
  approveCheckpoint: checkpointAssignmentId =>
    `instructor/checkpoints/approve/${checkpointAssignmentId}`,
}
const checkpoint = {
  getAll: checkpointAssignmentId =>
    `learn/checkpoints/all/${checkpointAssignmentId}`,
  getById: checkpointAssignmentId =>
    `learn/checkpoints/${checkpointAssignmentId}`,
  getTopStudents: checkpointAssignmentId =>
    `learn/checkpoints/top-students/${checkpointAssignmentId}`,
  put: checkpointAssignmentId =>
    `learn/checkpoints/submit/${checkpointAssignmentId}`,
  getDefaultCheckpointsList: `learn/checkpoints/default`,
  getDefaultCheckpointAssignment: `learn/checkpoints/assignment`,
}

const vouchers = {
  getAll: 'operation/vouchers',
  create: 'operation/vouchers',
  update: id => `operation/vouchers/${id}`,
  delete: id => `operation/vouchers/${id}`,
  getById: id => `operation/vouchers/${id}`,
}

const aquarium = {
  getAll: 'operation/aquariums',
  addAquarium: 'operation/aquariums',
  getAquarium: id => `operation/aquariums/${id}`,
  updateAquarium: id => `operation/aquariums/${id}`,
  deleteAquarium: id => `operation/aquariums/${id}`,
}

const student = {
  getAll: 'operation/students',
  getById: studentId => `operation/students/${studentId}`,
  getStudentSubscriptions: studentId =>
    `operation/students/${studentId}/subscriptions`,
  extendSubscription: (studentId, trackId) =>
    `operation/students/${studentId}/extend/track/${trackId}`,
  suspendSubscription: (studentId, trackId) =>
    `operation/students/${studentId}/suspend/track/${trackId}`,
  checkpointAvailabilities: (checkpointAssignementId, startDate, dueDate) =>
    `calendar/scheduler/availabilities/checkpoint-assignments/${checkpointAssignementId}/${startDate}/${dueDate}`,
  oneToOneAvailabilities: (oneToOneAssignementId, startDate, dueDate) =>
    `calendar/scheduler/availabilities/one-to-one-assignments/${oneToOneAssignementId}/${startDate}/${dueDate}`,
  workshopAvailabilities: (workshopAssignementId, startDate, dueDate) =>
    `calendar/meetings/workshop/${workshopAssignementId}/${startDate}/${dueDate}`,

  bookCheckpointMeeting: 'calendar/scheduler/meetings/checkpoint-assignments',
  bookOneToOneMeeting: 'calendar/scheduler/meetings/one-to-one-assignments',
  fetchCheckpointsList: 'learn/checkpoints/checkpoint-assignments',
  oneToOneList: 'learn/one-to-one/all-assignments',
  fetchMeetings: (id, startDate, dueDate) =>
    `calendar/meetings/student/${id}/${startDate}/${dueDate}`,
  fetchOneToOneAssignments: 'learn/one-to-one/all-assignments',
  workshopAssignments: 'learn/workshops/assignments',
  joinWorkshop: id => `calendar/scheduler/meetings/workshops/join/${id}`,
}
const instructor = {
  getAll: 'operation/instructors',
  getById: instructorsId => `operation/instructors/${instructorsId}`,
  addInstructor: 'operation/instructors',
  editInstructor: instructorsId => `operation/instructors/${instructorsId}`,
  deleteInstructor: instructorsId => `operation/instructors/${instructorsId}`,
  assignTrack: (profileId, trackId) =>
    `operation/instructors/${profileId}/assign/${trackId}`,
  unassignTrack: (profileId, trackId) =>
    `operation/instructors/${profileId}/unassign/${trackId}`,
  fetchAssignedTracks: profileId => `operation/instructors/${profileId}/tracks`,
  getAllStudents: 'instructor/students',
  getStudentById: studentId => `instructor/students/${studentId}`,
  getWorkshopsList: instructorId =>
    `calendar/meetings/workshop/instructor/${instructorId}`,
  getOneToOneMeetingList: instructorId =>
    `calendar/meetings/one-to-one/instructor/${instructorId}`,
  deleteMeeting: meetingId => `calendar/meetings/${meetingId}`,
  fetchCheckpointsReport: instructorId =>
    `operation/instructors/owned-checkpoint-assignment/${instructorId}`,
  closeCheckpoint: checkpointAssignmentId =>
    `operation/instructors/checkpoint-assignment/close/${checkpointAssignmentId}`,
  editCheckpointOwner: (checkpointId, instructorId) =>
    `operation/instructors/checkpoint-assignment/change-owner/${checkpointId}/${instructorId}`,
  inviteInstructor: 'operation/instructors/invite',
}

const tutor = {
  getAll: 'operation/tutors',
  getById: profileId => `operation/tutors/${profileId}`,
  addTutor: 'operation/tutors',
  editTutor: profileId => `operation/tutors/${profileId}`,
  inviteTutor: 'operation/tutors/invite',
  deleteTutor: profileId => `operation/tutors/${profileId}`,
  assignTrack: (profileId, trackId) =>
    `operation/tutors/${profileId}/assign/${trackId}`,
  unassignTrack: (profileId, trackId) =>
    `operation/tutors/${profileId}/unassign/${trackId}`,
  getAssignedTracks: profileId => `operation/tutors/${profileId}/tracks`,
}
const profile = {
  getByNameOrEmail: nameOrEmail => `operation/profiles/search/${nameOrEmail}`,
  getById: nameOrEmail => `operation/profiles/search/${nameOrEmail}`,
  profileHandler: `learn/profiles`,
}

const auth = {
  registerUser: 'auth/register',
  loginUser: 'auth/login',
  logout: 'auth/logout',
}

const instructorCalendar = {
  getAbsences: profileId => `calendar/absences/${profileId}`,
  getMeetings: (instructorId, startDate, dueDate) =>
    `calendar/meetings/instructor/${instructorId}/${startDate}/${dueDate}`,
  getAvailabilities: (instructorId, start, due) =>
    `calendar/scheduler/availabilities/${instructorId}/${start}/${due}`,
  getWorkTime: instructorId => `calendar/timeslots/${instructorId}`,
}

const studentCalendar = {
  getMeetings: (studentId, startDate, dueDate) =>
    `calendar/meetings/student/${studentId}/${startDate}/${dueDate}`,
}
const omCalendar = {
  getMeetings: (startDate, dueDate) =>
    `calendar/meetings/${startDate}/${dueDate}`,
  trackInstructors: {
    fetchAllInstructorsByTrackId: trackId =>
      `instructor/instructors/instructors-by-track/${trackId}`,
  },
}

const operationManagerLocationManagement = {
  getAllHolidays: 'calendar/holidays',
  getHolidayById: holidayId => `calendar/holidays/${holidayId}`,
  addHoliday: 'calendar/holidays',
  editHoliday: holidayId => `calendar/holidays/${holidayId}`,
  deleteHoliday: holidayId => `calendar/holidays/${holidayId}`,
  getAllDailySchedules: 'calendar/daily-schedules',
  addDailySchedule: 'calendar/daily-schedules',
  editDailySchedule: dailyScheduleId =>
    `calendar/daily-schedules/${dailyScheduleId}`,
  deleteDailySchedule: dailyScheduleId =>
    `calendar/daily-schedules/${dailyScheduleId}`,
}
const calendar = {
  absences: {
    getAbsences: 'calendar/absences',
    fetchAbsencesByProfileId: profileId => `calendar/absences/${profileId}`,
    createAbsence: 'calendar/absences',
    deleteAbsenceById: absenceId => `calendar/absences/${absenceId}`,
    deleteAllAbsenceByProfileId: profileId =>
      `calendar/absences/profile/${profileId}`,
  },
  timeslots: {
    createWorkTime: 'calendar/timeslots',
    fetchWorkTimes: (instructorId, startDate, dueDate) =>
      `calendar/timeslots/${instructorId}/${startDate}/${dueDate}`,
    updateAvailability: id => `calendar/timeslots/${id}`,
    deleteWorkTimesById: timeslotId => `calendar/timeslots/${timeslotId}`,
    deleteWorkTimesWithRecurrenceById: timeslotId =>
      `calendar/timeslots/with-recurrence/${timeslotId}`,
  },
  scheduler: {
    fetchInstructorScheduler: (instructorId, start, due) =>
      `calendar/scheduler/availabilities/${instructorId}/${start}/${due}`,
  },
  instructorMeetings: {
    fetchMeetingsByInstructor: (instructorId, startDate, dueDate) =>
      `calendar/meetings/instructor/${instructorId}/${startDate}/${dueDate}`,
  },
  studentsMeetings: {
    editOwner: (meetingId, profileId) =>
      `calendar/meetings/change-owner/${meetingId}/${profileId}`,
  },

  instructorWorkshops: {
    fetchWorkshopsByInstructor: (instructorId, start, due) =>
      `calendar/scheduler/availabilities/workshops/${instructorId}/${start}/${due}`,
  },
  instructorCheckpoint: {
    fetchCheckpointByInstructor: (instructorId, startDate, dueDate) =>
      `calendar/scheduler/availabilities/workshops/${instructorId}/${startDate}/${dueDate}`,
  },
  instructor: {
    fetchAllTracksByInstructorId: instructorId =>
      `instructor/instructors/tracks-by-instructor/${instructorId}`,
    fetchWorkshopsByTrackId: trackId =>
      `instructor/instructors/workshops-by-track/${trackId}`,
    createWorkshop: `calendar/scheduler/meetings/workshops`,
  },
}

const notification = {
  fetchNotifications: (skip, limit) => `notifications/${skip}/${limit}`,
  markNotificationsAsRead: 'notifications/mark-as-read',
}

const instructorOneToOneMeeting = {
  getConfirmedMeeting: 'calendar/meetings/one-to-one/status/2',
  getClosedMeeting: 'calendar/meetings/one-to-one/status/3',
  fetchOneToOneDetails: oneToOneAssignmentId =>
    `instructor/one-to-ones/${oneToOneAssignmentId}`,
  updateStudentAnswer: oneToOneAssignmentId =>
    `instructor/one-to-ones/${oneToOneAssignmentId}`,
  addInstructorFeedback: oneToOneAssignmentId =>
    `instructor/one-to-ones/conclude/${oneToOneAssignmentId}`,
}
const instructorWorkshop = {
  getIncompletedWorkshop: 'calendar/meetings/workshop/status/0',
  getClosedWorkshop: 'calendar/meetings/workshop/status/1',
}

const studentOneToOnes = {
  getOneToOneAssignments: 'learn/one-to-one/all-assignments',
  getAllOneToOnes: oneToOneAssignmentId =>
    `learn/one-to-one/all/${oneToOneAssignmentId}`,
  getDefaultOneToOnesList: 'learn/one-to-one/default',
  getOneToOneById: oneToOneAssignmentId =>
    `learn/one-to-one/${oneToOneAssignmentId}`,
  getDefaultLatestOneToOne: 'learn/one-to-one/assignment',
}

const instructorDashboard = {
  getLatestMeetings: number => `calendar/meetings/upcoming/owned/${number}`,
  fetchInstructorDetails: 'instructor/instructors/instructor-details',
}
const studentDashboard = {
  getLatestMeetings: number => `calendar/meetings/upcoming/${number}`,
  getMyTracks: 'learn/tracks/my-tracks',
}

export default {
  baseApiUrl: () => window.baseApiUrl,
  studentDashboard,
  instructorDashboard,
  track,
  skill,
  checkpoint,
  instructorCheckpoint,
  vouchers,
  aquarium,
  student,
  instructor,
  profile,
  auth,
  instructorCalendar,
  studentCalendar,
  calendar,
  omCalendar,
  operationManagerLocationManagement,
  instructorOneToOneMeeting,
  instructorWorkshop,
  notification,
  studentOneToOnes,
  tutor,
}
