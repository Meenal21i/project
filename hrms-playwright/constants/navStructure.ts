export const NavStructure = {
  Organization: [
    { text: 'My Profile', expectedUrl: 'https://hrms.test.intimetec.americas/user/organization/my-profile' },
    { text: 'Employee Directory', expectedUrl: 'https://hrms.test.intimetec.americas/user/organization/employee-directory' }
  ],
  'Leave & Attendance': [
    { text: 'Attendance record', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/attendance-record' },
    { text: 'Leaves Application', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leaves-application' },
    { text: 'Leave Entitlements', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leave-entitlements?tab=myEntitlementRequests' },
    { text: 'Leave Correction', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/leave-correction' },
    { text: 'My Holidays', expectedUrl: 'https://hrms.test.intimetec.americas/user/leave/my-holidays' }
  ]
};
