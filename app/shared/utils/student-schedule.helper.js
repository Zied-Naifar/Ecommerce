import moment from 'moment'
import {
  MOMENT_DATE_TIME_FORMAT,
  MOMENT_DAY_FORMAT,
  MOMENT_DATE_FORMAT,
  MOMENT_DATE_HOUR_MINUTE_FORMAT,
} from 'shared/constants'

export function selectedDayInMonthView(checkpointAvailabilities, rangeDate) {
  return checkpointAvailabilities.find(
    el =>
      moment(el.timeslot.startDate, MOMENT_DATE_TIME_FORMAT).format(
        MOMENT_DAY_FORMAT,
      ) ===
        moment(rangeDate.start, MOMENT_DATE_TIME_FORMAT).format(
          MOMENT_DAY_FORMAT,
        ) &&
      moment(el.timeslot.dueDate, MOMENT_DATE_TIME_FORMAT).format(
        MOMENT_DAY_FORMAT,
      ) ===
        moment(rangeDate.end, MOMENT_DATE_TIME_FORMAT).format(
          MOMENT_DAY_FORMAT,
        ),
  )
}

export function formattedAvailabilitiesByDate(checkpointAvailabilities) {
  return checkpointAvailabilities.reduce((acc, current) => {
    const filtredItems = checkpointAvailabilities.reduce(
      (a, c) => {
        if (
          moment(c.timeslot.startDate, MOMENT_DATE_TIME_FORMAT).format(
            MOMENT_DAY_FORMAT,
          ) ===
          moment(current.timeslot.startDate, MOMENT_DATE_TIME_FORMAT).format(
            MOMENT_DAY_FORMAT,
          )
        ) {
          if (c.type === 'New') {
            a.new = a.new.concat(c)
          } else a.join = a.join.concat(c)
        }
        return a
      },
      { join: [], new: [] },
    )
    acc[
      moment(current.timeslot.startDate, MOMENT_DATE_TIME_FORMAT).format(
        MOMENT_DATE_FORMAT,
      )
    ] = filtredItems
    return acc
  }, {})
}

export const matchAvailability = (
  filtredCheckpointAvailabilitiesByDate,
  range,
  checkpointDuration,
) =>
  filtredCheckpointAvailabilitiesByDate.new.find(
    el =>
      moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT).isSameOrAfter(
        el.timeslot.startDate,
      ) &&
      moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT)
        .add(checkpointDuration, 'seconds')
        .isSameOrBefore(el.timeslot.dueDate),
  )

export const joinMeetingIntersection = (
  selectedStartDate,
  range,
  checkpointDuration,
) =>
  selectedStartDate.join.find(
    el =>
      (moment(
        moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT).add(
          checkpointDuration,
          'seconds',
        ),
      ).isAfter(
        moment(el.timeslot.startDate).format(MOMENT_DATE_HOUR_MINUTE_FORMAT),
      ) &&
        moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT).isBefore(
          moment(el.timeslot.startDate, MOMENT_DATE_HOUR_MINUTE_FORMAT),
        )) ||
      (moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT)
        .add(checkpointDuration, 'seconds')
        .isAfter(moment(el.timeslot.dueDate, MOMENT_DATE_HOUR_MINUTE_FORMAT)) &&
        moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT).isBefore(
          moment(el.timeslot.dueDate, MOMENT_DATE_HOUR_MINUTE_FORMAT),
        )),
  )

export const selectLastSlot = (selectedStartDate, range, checkpointDuration) =>
  selectedStartDate.new
    .concat(selectedStartDate.join)
    .find(
      el =>
        moment(
          moment(range.start, MOMENT_DATE_TIME_FORMAT).add(
            checkpointDuration,
            'seconds',
          ),
        ).isAfter(moment(el.timeslot.dueDate, MOMENT_DATE_TIME_FORMAT)) &&
        moment(moment(range.start, MOMENT_DATE_TIME_FORMAT)).isBefore(
          moment(el.timeslot.dueDate, MOMENT_DATE_TIME_FORMAT),
        ),
    )

export const matchOneToOneAvailability = (
  oneToOneAvailabilities,
  range,
  checkpointDuration,
) =>
  oneToOneAvailabilities.new.find(
    el =>
      moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT).isSameOrAfter(
        el.timeslot.startDate,
      ) &&
      moment(range.start, MOMENT_DATE_HOUR_MINUTE_FORMAT)
        .add(checkpointDuration, 'seconds')
        .isSameOrBefore(el.timeslot.dueDate),
  )

export const selectOneToOneLastSlot = (
  selectedStartDate,
  range,
  checkpointDuration,
) =>
  selectedStartDate.new.find(
    el =>
      moment(
        moment(range.start, MOMENT_DATE_TIME_FORMAT).add(
          checkpointDuration,
          'seconds',
        ),
      ).isAfter(moment(el.timeslot.dueDate, MOMENT_DATE_TIME_FORMAT)) &&
      moment(moment(range.start, MOMENT_DATE_TIME_FORMAT)).isBefore(
        moment(el.timeslot.dueDate, MOMENT_DATE_TIME_FORMAT),
      ),
  )
