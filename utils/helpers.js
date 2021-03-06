// packages
const moment = require('moment')
const Table = require('cli-table2')

// input 'HH:mm', output moment object
const composeDateObject = (timeString) => {
  const hour = timeString.split(':')[0]
  const minutes = timeString.split(':')[1]
  return moment({ hour, minutes })
}

const printSingleDayReport = (record) => {
// instantiate
  var table = new Table()

  table.push(
    { 'Today you worekd:': record.dayReport },
    { 'Start:': record.start },
    { 'End:': record.end },
    { 'Break duration:': record.breakDuration + ' minutes' },
    { 'Date:': record.date }
  )

  console.log('\n Today looks like this:\n')
  // renders the table
  console.log(table.toString())
  console.log('Run moro --help if you need to edit your start, end or break duration for today \n')
}

// full report of all days
const printAllDaysReport = (records) => {
  // instantiate beautiful table
  const table = new Table()
  records.forEach((record) => {
    const report = record.formattedWorkHours
    const formattedRecord = {}
    formattedRecord[record.date] = report
    table.push(formattedRecord)
  })

  console.log('\n Full report of all days you used moro\n')
  console.log(table.toString())
}

module.exports = {
  composeDateObject,
  printSingleDayReport,
  printAllDaysReport
}
