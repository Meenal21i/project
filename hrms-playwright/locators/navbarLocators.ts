// export const NavBarLocators = {
//     Dashboard: '.mantine-Group-root mantine-1dn2tzg',
//     Organization: '.mantine-bfmej7',
//     LeaveAttendence: '.mantine-bfmej7',
// };
// // you have to just click on these, and verify that the following modules are present in the navigation bar:  

// // Dashboard, Organization (My Profile, Employee Directory), Leave & Attendance (Attendance record, Leaves Application, Leave Entitlements, Leave Correction, My Holidays) 

export const NavBarLocators = {
  // Top-level navigation items
  Dashboard: '.mantine-Group-root.mantine-1dn2tzg',
  Organization: '.mantine-bfmej7 >> text=Organization',
  LeaveAttendance: '.mantine-bfmej7 >> text="Leave & Attendance"',

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
