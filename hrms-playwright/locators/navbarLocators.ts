// export const NavBarLocators = {
//   // Top-level navigation items
//   // Dashboard: '.mantine-Group-root.mantine-1dn2tzg',
//   // Organization: '.mantine-bfmej7 >> text=Organization',
//   // LeaveAttendance: '.mantine-bfmej7 >> text="Leave & Attendance"',
//   Dashboard: '.mantine-bfmej7:has-text("Dashboard")',
//   Organization: '.mantine-bfmej7:has-text("Organization")',
//   LeaveAttendance: '.mantine-bfmej7:has-text("Leave & Attendance")',

//   // Organization sub-links
//   MyProfile: '//a[text()="My profile"]',
//   EmployeeDirectory: '//a[text()="Employee directory"]',

//   // Leave & Attendance sub-links
//   AttendanceRecord: '//a[text()="Attendance record"]',
//   LeavesApplication: '//a[text()="Leaves application"]',
//   LeaveEntitlements: '//a[text()="Leave entitlements"]',
//   LeaveCorrection: '//a[text()="Leave correction"]',
//   MyHolidays: '//a[text()="My holidays"]',
// };

// export const NavBarLocators = {
//   // Dashboard: 'role=button[name="Dashboard"]',
//   // Organization: 'role=button[name="Organization"]',
//   // LeaveAttendance: 'role=button[name="Leave & Attendance"]',

//   // Organization sub-links
//   MyProfile: '//a[text()="My profile"]',
//   EmployeeDirectory: '//a[text()="Employee directory"]',

//   // Leave & Attendance sub-links
//   AttendanceRecord: '//a[text()="Attendance record"]',
//   LeavesApplication: '//a[text()="Leaves application"]',
//   LeaveEntitlements: '//a[text()="Leave entitlements"]',
//   LeaveCorrection: '//a[text()="Leave correction"]',
//   MyHolidays: '//a[text()="My holidays"]',
// };


export const NavBarLocators = {
  Dashboard: 'role=button[name="Dashboard"]',
  Organization: 'role=button[name="Organization"]',
  'Leave & Attendance': 'role=button[name="Leave & Attendance"]', // ✅ MUST match NavStructure key

  // Organization sub-links
  MyProfile: '//a[text()="My profile"]',
  EmployeeDirectory: '//a[text()="Employee directory"]',

  // Leave & Attendance sub-links
  AttendanceRecord: '//a[text()="Attendance record"]',
  LeavesApplication: '//a[text()="Leaves application"]',
  LeaveEntitlements: '//a[text()="Leave entitlements"]',
  LeaveCorrection: '//a[text()="Leave correction"]',
  MyHolidays: '//a[text()="My holidays"]',
};
