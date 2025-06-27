export const AttendanceLocators = {
  // Navigation
  MODULE_ATTENDANCE: 'text=Leave & Attendance',
  MENU_ATTENDANCE_RECORD: 'text=Attendance Record',

  // Date range picker
  DATE_RANGE_INPUT: 'input[placeholder="Select Date"]',
  CALENDAR_DAY_BUTTON: (date: string) => `td div.mantine-Paper-root:text-is("${date}")`,

  // Status filter
  STATUS_DROPDOWN_INPUT: 'input[placeholder="Status"]',
  STATUS_OPTION: (status: string) => `.mantine-Badge-inner:has-text("${status}")`,

  // Attendance Records
  RECORD_ROW: 'tr[id]', // IDs like "0", "1", etc.
  RECORD_STATUS_BADGE: (status: string) => `.mantine-Badge-inner:has-text("${status}")`,
};
